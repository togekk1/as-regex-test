export declare namespace dom {
  @external("env", "dom.appendChild")
  @external.js("return targetElement.appendChild(sourceElement);")
  export function appendChild(
    targetElement: externref,
    sourceElement: externref
  ): void;
}
