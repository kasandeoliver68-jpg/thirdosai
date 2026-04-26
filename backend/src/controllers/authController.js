import { badRequest, created, ok } from "../utils/http.js";
import { loginUser, registerUser } from "../services/authService.js";

export function register(request, response) {
  const { name, email, password, organizationName, sector, geography } = request.body ?? {};

  if (!name || !email || !password) {
    return badRequest(response, "Name, email, and password are required");
  }

  const result = registerUser({ name, email, password, organizationName, sector, geography });
  return created(response, result);
}

export function login(request, response) {
  const { email, password } = request.body ?? {};

  if (!email || !password) {
    return badRequest(response, "Email and password are required");
  }

  const result = loginUser({ email, password });
  return ok(response, result);
}

export function me(request, response) {
  return ok(response, { user: request.user });
}
