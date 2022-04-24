import { webgl } from "../../namespaces/webgl";

export function load_shader(
  gl: externref,
  type: i32,
  source: string
): externref {
  const shader = webgl.createShader(gl, type);

  // Send the source to the shader object

  webgl.shaderSource(gl, shader, source);

  // Compile the shader program

  webgl.compileShader(gl, shader);

  // See if it compiled successfully

  if (!webgl.getShaderParameter(gl, shader, webgl.COMPILE_STATUS(gl))) {
    const info = webgl.getShaderInfoLog(gl, shader);
    if (info) console.log(`An error occurred compiling the shaders: ${info}`);
    webgl.deleteShader(gl, shader);
    return null;
  }

  return shader;
}
