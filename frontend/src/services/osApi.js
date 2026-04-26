const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {})
    },
    ...options
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export async function submitToOs(payload) {
  const result = await requestJson("/api/intake", {
    method: "POST",
    body: JSON.stringify(payload)
  });

  sessionStorage.setItem("thirdspace:lastRun", JSON.stringify(result));
  return result;
}

export async function getCollection(path) {
  const data = await requestJson(path);
  return data.items ?? data.item ?? data.summary ?? data;
}

export async function approveRequest(id, status, note = "") {
  return requestJson(`/api/approvals/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status, note })
  });
}
