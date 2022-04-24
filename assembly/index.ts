import { fetch_asc } from "./namespaces/fetch";

export * from "./namespaces/fetch";
import { document } from "./namespaces/document";
import { dom } from "./namespaces/dom";
import { create_gl } from "./functions/webgl/create-gl";

export class Response {
  name: string;
  age: i32;
  country: string;
}

export let response: StaticArray<Response> | null;

export function callback(): void {
  const response_local = response;
  if (response_local) {
    const fragment = document.createDocumentFragment();
    const appendChild = dom.appendChild;
    const createElement = document.createElement;
    const canvas_el = createElement("canvas");

    create_gl(canvas_el);

    appendChild(fragment, canvas_el);
    appendChild(document.getElementById("app"), fragment);
  }
}

export function main(): void {
  fetch_asc("assets/test");
}
