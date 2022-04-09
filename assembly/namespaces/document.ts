export declare namespace document {
    // @ts-ignore
    @external("env", "document.getElementById")
    export function getElementById(id: string): externref;
    // @ts-ignore
    @external("env", "document.createTextNode")
    export function createTextNode(data: string): externref;
    // @ts-ignore
    @external("env", "document.createElement")
    export function createElement(name: string): externref;
}