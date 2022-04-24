import { webgl } from "../../namespaces/webgl";

export function drawScene(
  gl: externref,
  attribLocations_vertexPosition: f64,
  uniformLocations_projectionMatrix: externref,
  uniformLocations_modelViewMatrix: externref,
  buffers
) {
  webgl.clearColor(gl, 0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  webgl.clearDepth(1.0); // Clear everything
  webgl.enable(webgl.DEPTH_TEST); // Enable depth testing
  webgl.depthFunc(webgl.LEQUAL); // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = (45 * Math.PI) / 180; // in radians
  const aspect = webgl.canvas.clientWidth / webgl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [-0.0, 0.0, -6.0]
  ); // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    const numComponents = 2; // pull out 2 values per iteration
    const type = webgl.FLOAT; // the data in the buffer is 32bit floats
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set of values to the next
    // 0 = use type and numComponents above
    const offset = 0; // how many bytes inside the buffer to start from
    webgl.bindBuffer(webgl.ARRAY_BUFFER, buffers.position);
    webgl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      type,
      normalize,
      stride,
      offset
    );
    webgl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL to use our program when drawing

  webgl.useProgram(programInfo.program);

  // Set the shader uniforms

  webgl.uniformMatrix4fv(
    programInfo.uniformLocations.projectionMatrix,
    false,
    projectionMatrix
  );
  webgl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix
  );

  {
    const offset = 0;
    const vertexCount = 4;
    webgl.drawArrays(webgl.TRIANGLE_STRIP, offset, vertexCount);
  }
}
