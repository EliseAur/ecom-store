import { fetchData } from "./fetchData";

export async function fetchProducts() {
  const url = "https://v2.api.noroff.dev/online-shop";
  const data = await fetchData(url);

  if (!Array.isArray(data)) {
    throw new Error("Data is not an array");
  }

  return data;
}

// export async function fetchProducts() {
//   const url = "https://v2.api.noroff.dev/online-shop";

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const result = await response.json();

//     if (response.ok) {
//       if (!Array.isArray(result.data)) {
//         throw new Error("Data is not an array");
//       }
//       console.log("Fetched products:", result.data);
//       return result.data;
//     } else {
//       const error = new Error(result.errors ? result.errors[0].message : "An error occurred");
//       error.status = result.status;
//       error.statusCode = result.statusCode;
//       throw error;
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// }
