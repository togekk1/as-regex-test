export class Response {
  name: string;
  age: i32;
  country: string;
}




@external("env", "fetch_asc")
@external.js("(async()=>{response.value = await (await fetch(url)).json();callback();})();")
export declare function fetch_asc(url: string): void;
