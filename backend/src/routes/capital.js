import { Router } from "express";
import { ok } from "../utils/http.js";
import { listCollection } from "../utils/memoryStore.js";

const router = Router();

router.get("/", (_request, response) => {
  ok(response, {
    investors: listCollection("investors"),
    mandates: listCollection("investorMandates"),
    matches: listCollection("investorMatches")
  });
});

export default router;
