import { createId } from "../utils/id.js";
import { pushRecord } from "../utils/memoryStore.js";

export function indexKnowledgeItems(items) {
  return items.map((item) => {
    const record = {
      id: createId(),
      ...item,
      createdAt: item.createdAt ?? new Date().toISOString()
    };

    pushRecord("knowledgeItems", record);
    return record;
  });
}

export function searchKnowledgeItems(query, items) {
  const normalizedQuery = String(query ?? "").trim().toLowerCase();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const haystack = [item.title, item.type, item.sector, item.geography, item.status, item.searchableText]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}