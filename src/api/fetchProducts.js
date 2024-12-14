import { fetchData } from "./fetchData";

export async function fetchProducts() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const data = await fetchData(url);

  if (!Array.isArray(data)) {
    throw new Error("Data is not an array");
  }

  return data;
}
