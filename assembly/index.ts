// The entry file of your WebAssembly module.

import { RegExp } from "assemblyscript-regex/assembly";
import { document } from "assemblyscript/std/assembly/bindings/dom";

class plain_object {
  name: string;
  age: i32;
}

export function main(): void {
  const regex = new RegExp(",", "g");
  const str = "table football foul";
  console.log(`${regex.test(str)}`);
}

export function set_dom(): externref {
  return document.getElementById("app");
}
