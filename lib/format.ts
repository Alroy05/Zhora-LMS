export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price)
};

// export const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-MY", {
//       style: "currency",
//       currency: "MYR"
//     }).format(price);
//   };