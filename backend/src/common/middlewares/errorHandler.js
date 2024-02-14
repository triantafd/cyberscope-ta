import CustomError from "../errors/customError.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: "Sorry, something went wrong" }],
  });
};

export default errorHandler;
