import "express-async-errors";
import express from "express";
import NotFoundError from "./common/errors/notFoundError.js";
import errorHandler from "./common/middlewares/errorHandler.js";
import requestLogger from "./common/middlewares/requestLogger.js";
import { coingeckoRouter } from "./features/coingeckoApi/coingeckoRoute.js";

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use("/api", coingeckoRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
