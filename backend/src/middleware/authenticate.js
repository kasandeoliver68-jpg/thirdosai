import { forbidden } from "../utils/http.js";
import { getUserFromTokenPayload, verifyBearerToken } from "../services/authService.js";

export function authenticate(request, response, next) {
  const header = request.headers.authorization ?? "";

  if (!header.startsWith("Bearer ")) {
    return forbidden(response, "Missing bearer token");
  }

  try {
    const token = header.slice(7);
    const payload = verifyBearerToken(token);
    const user = getUserFromTokenPayload(payload);

    if (!user) {
      return forbidden(response, "Invalid token user");
    }

    request.user = user;
    next();
  } catch {
    return forbidden(response, "Invalid or expired token");
  }
}
