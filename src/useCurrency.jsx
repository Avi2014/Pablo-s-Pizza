const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD", // feel free to change to your local currency
});

export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return priceConverter(price);
}
