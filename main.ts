import { get_data } from "./mod.ts";

console.log("START");

const data = await get_data();
console.log(data);

console.log("END");
