import jwt from "jsonwebtoken";
import { randomUUID } from "node:crypto";
import { store, pushRecord } from "../utils/memoryStore.js";

function getSecret() {
  return process.env.JWT_SECRET ?? "thirdspace-demo-secret";
}

function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role }, getSecret(), { expiresIn: "8h" });
}

export function registerUser(input) {
  const existing = store.users.find((user) => user.email === input.email);

  if (existing) {
    const error = new Error("User already exists");
    error.statusCode = 409;
    throw error;
  }

  const organizationId = randomUUID();
  const user = {
    id: randomUUID(),
    email: input.email,
    name: input.name,
    passwordHash: input.password,
    role: "member",
    organizationId,
    createdAt: new Date().toISOString()
  };

  const organization = {
    id: organizationId,
    name: input.organizationName ?? `${input.name}'s Organization`,
    sector: input.sector ?? "General",
    geography: input.geography ?? "Global",
    approvalMode: "human_required_for_high_risk",
    createdAt: new Date().toISOString()
  };

  pushRecord("organizations", organization);
  pushRecord("users", user);

  return {
    token: signToken(user),
    user,
    organization
  };
}

export function loginUser(input) {
  const user = store.users.find((entry) => entry.email === input.email && entry.passwordHash === input.password);

  if (!user) {
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  }

  return {
    token: signToken(user),
    user,
    organization: store.organizations.find((organization) => organization.id === user.organizationId) ?? null
  };
}

export function getUserFromTokenPayload(payload) {
  return store.users.find((user) => user.id === payload.sub) ?? null;
}

export function verifyBearerToken(token) {
  return jwt.verify(token, getSecret());
}
