import { wasm_init } from "./wasm-init";

(async () => {
  console.log(await wasm_init());
})();
