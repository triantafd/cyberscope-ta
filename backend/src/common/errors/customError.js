class CustomError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = null;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default CustomError;
