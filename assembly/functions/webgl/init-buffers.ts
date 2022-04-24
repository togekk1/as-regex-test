import { webgl } from "../../namespaces/webgl";

export function initBuffers(gl: externref) {
  // Create a buffer for the square's positions.

  const positionBuffer = webgl.createBuffer(gl);

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  webgl.bindBuffer(gl, webgl.ARRAY_BUFFER(gl), positionBuffer);

  // Now create an array of positions for the square.

  [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
  const positions = new Float32Array(8);
  positions[0] = 1.0;
  positions[1] = 1.0;
  positions[2] = -1.0;
  positions[3] = 1.0;
  positions[4] = 1.0;
  positions[5] = -1.0;
  positions[6] = -1.0;
  positions[7] = -1.0;

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  webgl.bufferData(
    gl,
    webgl.ARRAY_BUFFER(gl),
    positions,
    webgl.STATIC_DRAW(gl)
  );

  return positionBuffer;
}
