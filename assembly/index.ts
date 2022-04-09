import { fetch } from "./namespaces/fetch";
import { document } from "./namespaces/document";
import { dom } from "./namespaces/dom";

class Response {
  name: string;
  age: i32;
  country: string;
}

export function main(): void {
  fetch("assets/test");
}

export function callback(response: StaticArray<Response>): void {
  // const b = document.getElementById("app");
  const b = dom.createDocumentFragment();
  const appendChild = dom.appendChild;

  for (let i = 0; i < response.length; i++) {
    const createTextNode = document.createTextNode;
    const createElement = document.createElement;
    appendChild(b, createTextNode(response[i].name));
    appendChild(b, createElement("br"));
    appendChild(b, createTextNode(`${response[i].age}`));
    appendChild(b, createElement("br"));
    appendChild(b, createTextNode(response[i].country));
    appendChild(b, createElement("br"));
  }

  appendChild(document.getElementById("app"), b);
}
