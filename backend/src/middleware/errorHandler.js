export function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  const statusCode = error.statusCode ?? 500;
  const message = error.message ?? "Internal server error";

  response.status(statusCode).json({ message });
}
