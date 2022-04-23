export declare namespace document {
  @external("env", "document.getElementById")
  export function getElementById(id: string): externref;
  @external("env", "document.createTextNode")
  export function createTextNode(data: string): externref;
  @external("env", "document.createElement")
  export function createElement(name: string): externref;
  @external("env", "document.createDocumentFragment")
  @external.js("return document.createDocumentFragment();")
  export function createDocumentFragment(): externref;
}
