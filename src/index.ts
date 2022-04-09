import { instantiate } from "../public/build/index.untouched";

(async () => {
  const { main, callback } = await instantiate(
    await WebAssembly.compileStreaming(fetch("build/index.untouched.wasm")),
    {
      env: {},
      fetch: {
        fetch: async (url: string) => {
          callback(await (await fetch(url)).json());
        },
      },
      dom: {
        appendChild: (
          targetElement: HTMLElement,
          sourceElement: HTMLElement
        ) => {
          targetElement.appendChild(sourceElement);
        },
        createDocumentFragment: () => {
          return document.createDocumentFragment();
        },
      },
    }
  );

  main();
})();
