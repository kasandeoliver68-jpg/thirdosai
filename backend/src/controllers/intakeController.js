import { badRequest, created } from "../utils/http.js";
import { receiveIntake } from "../services/intakeService.js";

export async function submitIntake(request, response, next) {
  try {
    const { title, inputType, source, sector, geography, description, content, userId, organizationId } = request.body ?? {};

    if (!title || !source) {
      return badRequest(response, "Title and source are required");
    }

    const result = await receiveIntake({
      title,
      inputType,
      source,
      sector,
      geography,
      description,
      content,
      userId,
      organizationId
    });

    return created(response, result);
  } catch (error) {
    return next(error);
  }
}
