import { fetchData } from "./fetchData";

export async function fetchProductDetails(id) {
  const url = `https://v2.api.noroff.dev/online-shop/${id}`;
  return await fetchData(url);
}
