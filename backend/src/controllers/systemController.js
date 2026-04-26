import { ok } from "../utils/http.js";
import { listCollection, findRecord } from "../utils/memoryStore.js";
import { searchKnowledgeItems } from "../services/knowledgeBaseService.js";
import { getDashboardSummary } from "../services/summaryService.js";

export function listCollectionItems(collectionName) {
  return (_request, response) => ok(response, { items: listCollection(collectionName) });
}

export function getCollectionItem(collectionName) {
  return (request, response) => {
    const item = findRecord(collectionName, request.params.id);

    if (!item) {
      return response.status(404).json({ message: "Item not found" });
    }

    return ok(response, { item });
  };
}

export function searchKnowledge(request, response) {
  const items = listCollection("knowledgeItems");
  const filtered = searchKnowledgeItems(request.query.q ?? "", items);
  return ok(response, { items: filtered });
}

export function dashboardSummary(_request, response) {
  return ok(response, { summary: getDashboardSummary() });
}
