import type { ASUtil } from "@assemblyscript/loader";
import loader from "@assemblyscript/loader";

export async function wasm_init() {
  let asc: ASUtil;

  const imports = {
    /* imports go here */
    //   ...(memory ? { env: { memory } } : {}),
    console: {
      "console.log": (ptr: number) => {
        asc && console.log(asc.__getString(ptr));
      },
      "console.logi": (i: number) => {
        console.log(i);
      },
      "console.logf": (f: number) => {
        console.log(f);
      },
      "console.logj": (ptr: number) => {
        try {
          asc && console.log(JSON.parse(asc.__getString(ptr)));
        } catch (err) {
          console.error(err);
        }
      },
    },
  };

  try {
    asc = (
      await loader.instantiateStreaming(fetch("build/index.wasm"), imports)
    ).exports as unknown as ASUtil;
    return Promise.resolve(asc);
  } catch (err) {
    console.error(err);
    return Promise.reject();
  }
}
