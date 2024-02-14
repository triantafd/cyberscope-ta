import CustomError from "./customError.js";

class NotFoundError extends CustomError {
  constructor() {
    super("Route not found");
    this.statusCode = 404;
  }

  serializeErrors() {
    return [{ message: "Request Route Not Found" }];
  }
}

export default NotFoundError;
