import { fetch_asc } from "./namespaces/fetch";

export * from "./namespaces/fetch";
import { document } from "./namespaces/document";
import { dom } from "./namespaces/dom";

export class Response {
  name: string;
  age: i32;
  country: string;
}

export let response: StaticArray<Response> | null;

export function callback(): void {
  const response_local = response;
  if (response_local) {
    const b = document.createDocumentFragment();
    const appendChild = dom.appendChild;
    for (let i = 0; i < response_local.length; i++) {
      const createTextNode = document.createTextNode;
      const createElement = document.createElement;
      appendChild(b, createTextNode(response_local[i].name));
      appendChild(b, createElement("br"));
      appendChild(b, createTextNode(`${response_local[i].age}`));
      appendChild(b, createElement("br"));
      appendChild(b, createTextNode(response_local[i].country));
      appendChild(b, createElement("br"));
    }
    appendChild(document.getElementById("app"), b);
  }
}

export function main(): void {
  fetch_asc("assets/test");
}
