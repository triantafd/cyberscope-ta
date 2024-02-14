import express from "express";
import coinController from "./coingeckoController.js";

const router = express.Router();

router.get("/coins/markets", coinController.getMarketData);
router.get("/coins/:id", coinController.getCoinDetails);

export {router as coingeckoRouter};
