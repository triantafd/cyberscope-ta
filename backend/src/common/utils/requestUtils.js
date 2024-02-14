import axios from "axios";
import RateLimiterError from "../errors/rateLimitError.js";

export const fetchWithRetry = async (
  url,
  params,
  retries = 3,
  backoff = 300
) => {
  try {
    return await axios.get(url, { params });
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... ${retries} attempts left. Waiting ${backoff}ms`);
      await new Promise((resolve) => setTimeout(resolve, backoff));
      return fetchWithRetry(url, params, retries - 1, backoff * 2);
    } else {
      console.error("Request failed after retries: ");
      throw new RateLimiterError(
        "Max retries reached, try request later for Coingecko external API"
      );
    }
  }
};
