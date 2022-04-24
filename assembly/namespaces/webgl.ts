export declare namespace webgl {
  @external("env", "webgl.clearColor")
  @external.js("webgl.clearColor(red,green,blue,alpha)")
  export function clearColor(
    webgl: externref,
    red: f64,
    green: f64,
    blue: f64,
    alpha: f64
  ): void;

  @external("env", "webgl.clear")
  @external.js("webgl.clear(mask)")
  export function clear(webgl: externref, mask: i32): void;

  @external("env", "webgl.COLOR_BUFFER_BIT")
  @external.js("return webgl.COLOR_BUFFER_BIT")
  export function COLOR_BUFFER_BIT(webgl: externref): i32;

  @external("env", "webgl.VERTEX_SHADER")
  @external.js("return webgl.VERTEX_SHADER")
  export function VERTEX_SHADER(webgl: externref): i32;

  @external("env", "webgl.FRAGMENT_SHADER")
  @external.js("return webgl.FRAGMENT_SHADER")
  export function FRAGMENT_SHADER(webgl: externref): i32;

  @external("env", "webgl.createProgram")
  @external.js("return webgl.createProgram()")
  export function createProgram(webgl: externref): WebGLProgram;

  @external("env", "webgl.attachShader")
  @external.js("webgl.attachShader(program,shader)")
  export function attachShader(
    webgl: externref,
    program: WebGLProgram,
    shader: WebGLShader
  ): void;

  @external("env", "webgl.linkProgram")
  @external.js("webgl.linkProgram(program)")
  export function linkProgram(webgl: externref, program: WebGLProgram): void;

  @external("env", "webgl.getProgramParameter")
  @external.js("return webgl.getProgramParameter(program,pname)")
  export function getProgramParameter(
    webgl: externref,
    program: WebGLProgram,
    pname: GLenum
  ): externref;

  @external("env", "webgl.getProgramInfoLog")
  @external.js("return webgl.getProgramInfoLog(program)")
  export function getProgramInfoLog(
    webgl: externref,
    program: WebGLProgram
  ): string | null;

  @external("env", "webgl.LINK_STATUS")
  @external.js("return webgl.LINK_STATUS")
  export function LINK_STATUS(webgl: externref): GLenum;

  @external("env", "webgl.createShader")
  @external.js("return webgl.createShader(type)")
  export function createShader(webgl: externref, type: GLenum): WebGLShader;

  @external("env", "webgl.shaderSource")
  @external.js("webgl.shaderSource(shader,source)")
  export function shaderSource(
    webgl: externref,
    shader: WebGLShader,
    source: string
  ): void;

  @external("env", "webgl.compileShader")
  @external.js("webgl.compileShader(shader)")
  export function compileShader(webgl: externref, shader: WebGLShader): void;

  @external("env", "webgl.getShaderParameter")
  @external.js("return webgl.getShaderParameter(shader,pname)")
  export function getShaderParameter(
    webgl: externref,
    shader: WebGLShader,
    pname: GLenum
  ): externref;

  @external("env", "webgl.getShaderInfoLog")
  @external.js("return webgl.getShaderInfoLog(shader)")
  export function getShaderInfoLog(
    webgl: externref,
    shader: WebGLShader
  ): string | null;

  @external("env", "webgl.deleteShader")
  @external.js("webgl.deleteShader(shader)")
  export function deleteShader(webgl: externref, shader: WebGLShader): void;

  @external("env", "webgl.COMPILE_STATUS")
  @external.js("return webgl.COMPILE_STATUS")
  export function COMPILE_STATUS(webgl: externref): GLenum;

  @external("env", "webgl.getAttribLocation")
  @external.js("return webgl.getAttribLocation(program,name)")
  export function getAttribLocation(
    webgl: externref,
    program: WebGLProgram,
    name: string
  ): GLint;

  @external("env", "webgl.getUniformLocation")
  @external.js("return webgl.getUniformLocation(program,name)")
  export function getUniformLocation(
    webgl: externref,
    program: WebGLProgram,
    name: string
  ): WebGLUniformLocation;

  @external("env", "webgl.createBuffer")
  @external.js("return webgl.createBuffer()")
  export function createBuffer(webgl: externref): WebGLBuffer;

  @external("env", "webgl.bindBuffer")
  @external.js("webgl.bindBuffer(target,buffer)")
  export function bindBuffer(
    webgl: externref,
    target: GLenum,
    buffer: WebGLBuffer
  ): void;

  @external("env", "webgl.bufferData")
  @external.js("webgl.bufferData(target,data,usage)")
  export function bufferData(
    webgl: externref,
    target: GLenum,
    data: BufferSource | null,
    usage: GLenum
  ): void;

  @external("env", "webgl.ARRAY_BUFFER")
  @external.js("return webgl.ARRAY_BUFFER")
  export function ARRAY_BUFFER(webgl: externref): GLenum;

  @external("env", "webgl.STATIC_DRAW")
  @external.js("return webgl.STATIC_DRAW")
  export function STATIC_DRAW(webgl: externref): GLenum;

  type GLenum = f64;
  type GLint = f64;
  type WebGLProgram = externref;
  type WebGLShader = externref;
  type WebGLUniformLocation = externref;
  type WebGLBuffer = externref;
  type BufferSource = ArrayBufferView;
}
