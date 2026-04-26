export function ok(response, payload) {
  response.json(payload);
}

export function created(response, payload) {
  response.status(201).json(payload);
}

export function noContent(response) {
  response.status(204).send();
}

export function badRequest(response, message) {
  response.status(400).json({ message });
}

export function notFound(response, message) {
  response.status(404).json({ message });
}

export function forbidden(response, message) {
  response.status(403).json({ message });
}
