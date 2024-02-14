import coinGeckoService from "./coingeckoService.js";

const getMarketData = async (req, res, next) => {
  try {
    const data = await coinGeckoService.fetchMarketData(req.query);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

const getCoinDetails = async (req, res, next) => {
  try {
    const data = await coinGeckoService.fetchCoinDetails(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default { getMarketData, getCoinDetails };
