import uri from "./uri.ts";
import { color } from "./util.ts";

const get_data = async () => {
  const url = uri();
  console.log(color.yellow(url));
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export { get_data };
