import { fetchWithRetry } from "../../common/utils/requestUtils.js";
import {
  requiredAttributesForMarketData,
  requiredAttributesForCoinDetails,
} from "./coingeckoConfiguration.js";
import { COINGECKO_BASE_URL } from "./coingeckoConstants.js";
import {
  filterArrayObjectsByAttributes,
  filterObjectByAttributes,
} from "./helpers/index.js";

const fetchMarketData = async (params) => {
  const response = await fetchWithRetry(`${COINGECKO_BASE_URL}/coins/markets`, {
    ...params,
    vs_currency: "usd",
  });

  const filteredCoins = filterArrayObjectsByAttributes(
    response.data,
    requiredAttributesForMarketData
  );

  return filteredCoins;
};

const fetchCoinDetails = async (id) => {
  const response = await fetchWithRetry(`${COINGECKO_BASE_URL}/coins/${id}`);

  const filteredCoin = filterObjectByAttributes(
    response.data,
    requiredAttributesForCoinDetails
  );

  return filteredCoin;
};

export default { fetchMarketData, fetchCoinDetails };
