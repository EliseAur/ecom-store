import { fetchData } from "./fetchData";

export async function fetchProductDetails(id) {
  const url = `https://v2.api.noroff.dev/online-shop/${id}`;
  return await fetchData(url);
}

// export async function fetchProductDetails(id) {
//   const url = `https://v2.api.noroff.dev/online-shop/${id}`;

//   try {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const result = await response.json();

//     if (response.ok) {
//       console.log("Fetched product details:", result.data);
//       return result.data;
//     } else {
//       const error = new Error(result.errors ? result.errors[0].message : "An error occurred");
//       error.status = result.status;
//       error.statusCode = result.statusCode;
//       throw error;
//     }
//   } catch (error) {
//     console.error("Error fetching product details:", error);
//     throw error;
//   }
// }
