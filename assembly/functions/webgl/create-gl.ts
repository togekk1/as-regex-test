import { canvas } from "../../namespaces/canvas";
import { webgl } from "../../namespaces/webgl";
import { init_shader_program } from "./init-shader-program";

export function create_gl(canvas_el: externref): void {
  const gl = canvas.getContext(canvas_el, "webgl");

  // Set clear color to black, fully opaque
  webgl.clearColor(gl, 0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  webgl.clear(gl, webgl.COLOR_BUFFER_BIT(gl));

  const vsSource = `
    attribute vec4 aVertexPosition;
  
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
  
    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;

  const fsSource = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
  `;

  const shaderProgram = init_shader_program(gl, vsSource, fsSource);

  const attribLocations_vertexPosition = webgl.getAttribLocation(
    gl,
    shaderProgram,
    "aVertexPosition"
  );
  const uniformLocations_projectionMatrix = webgl.getUniformLocation(
    gl,
    shaderProgram,
    "uProjectionMatrix"
  );
  const uniformLocations_modelViewMatrix = webgl.getUniformLocation(
    gl,
    shaderProgram,
    "uModelViewMatrix"
  );
}
