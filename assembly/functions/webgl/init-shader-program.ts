import { webgl } from "../../namespaces/webgl";
import { load_shader } from "./load-shader";

export function init_shader_program(
  gl: externref,
  vsSource: string,
  fsSource: string
): externref {
  const vertexShader = load_shader(gl, webgl.VERTEX_SHADER(gl), vsSource);
  const fragmentShader = load_shader(gl, webgl.FRAGMENT_SHADER(gl), fsSource);

  // Create the shader program

  const shaderProgram = webgl.createProgram(gl);
  webgl.attachShader(gl, shaderProgram, vertexShader);
  webgl.attachShader(gl, shaderProgram, fragmentShader);
  webgl.linkProgram(gl, shaderProgram);

  // If creating the shader program failed, alert

  if (!webgl.getProgramParameter(gl, shaderProgram, webgl.LINK_STATUS(gl))) {
    const info = webgl.getProgramInfoLog(gl, shaderProgram);
    if (info) console.log(`Unable to initialize the shader program: ${info}`);
    return null;
  }

  return shaderProgram;
}
