export const requiredAttributesForMarketData = [
  { keyToSearch: "id", newKey: "id" },
  { keyToSearch: "name", newKey: "name" },
  { keyToSearch: "symbol", newKey: "symbol" },
  { keyToSearch: "current_price", newKey: "current_price" },
  { keyToSearch: "high_24h", newKey: "high_24h" },
  { keyToSearch: "low_24h", newKey: "low_24h" },
  { keyToSearch: "price_change_percentage_24h", newKey: "price_change_24h" },
];

export const requiredAttributesForCoinDetails = [
  { keyToSearch: "id", newKey: "id" },
  { keyToSearch: "name", newKey: "name" },
  { keyToSearch: "symbol", newKey: "symbol" },
  { keyToSearch: "description.en", newKey: "description" },
  { keyToSearch: "market_data.current_price.usd", newKey: "current_price_usd" },
  { keyToSearch: "market_data.high_24h.usd", newKey: "high_24h_usd" },
  { keyToSearch: "market_data.low_24h.usd", newKey: "low_24h_usd" },
  {
    keyToSearch: "market_data.price_change_percentage_24h",
    newKey: "price_change_24h",
  },
  {
    keyToSearch: "market_data.price_change_percentage_7d",
    newKey: "price_change_7d",
  },
  {
    keyToSearch: "market_data.price_change_percentage_14d",
    newKey: "price_change_14d",
  },
  {
    keyToSearch: "market_data.price_change_percentage_30d",
    newKey: "price_change_30d",
  },
  {
    keyToSearch: "market_data.price_change_percentage_60d",
    newKey: "price_change_60d",
  },
  {
    keyToSearch: "market_data.price_change_percentage_200d",
    newKey: "price_change_200d",
  },
];
