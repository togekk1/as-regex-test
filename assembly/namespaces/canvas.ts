export declare namespace canvas {
  @external("env", "canvas.getContext")
  @external.js("const g=targetElement.getContext(context);if(g)return g;else throw new Error(\"Unable to initialize WebGL. Your browser or machine may not support it.\")")
  export function getContext(
    targetElement: externref,
    context:string
  ): externref;
}
