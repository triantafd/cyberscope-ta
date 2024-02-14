import CustomError from "./customError.js";

class RateLimiterError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 429;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default RateLimiterError;
