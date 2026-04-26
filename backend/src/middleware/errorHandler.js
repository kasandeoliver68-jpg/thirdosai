export function errorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  // Log the error for server-side diagnostics
  try {
    console.error(error && error.stack ? error.stack : error);
  } catch (e) {
    // ignore logging failures
  }

  const statusCode = error.statusCode ?? 500;
  const message = error.message ?? "Internal server error";

  // In development, include a little more detail to assist debugging.
  const payload = { message };
  if (process.env.NODE_ENV !== "production") {
    payload.error = (error && error.stack) ? String(error.stack).split("\n").slice(0,3).join(" | ") : undefined;
  }

  response.status(statusCode).json(payload);
}
