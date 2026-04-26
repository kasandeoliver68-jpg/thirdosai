import { listCollection } from "../utils/memoryStore.js";

export function listReports() {
  return listCollection("reports");
}
