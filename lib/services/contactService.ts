import {
  type ContactApiResponse,
  type ContactPayload,
} from "@/lib/validation/contactSchemas";

const FALLBACK_SERVER_ERROR: ContactApiResponse = {
  success: false,
  error: {
    code: "SERVER_ERROR",
    message: "Something went wrong",
  },
};

function isContactApiResponse(value: unknown): value is ContactApiResponse {
  if (typeof value !== "object" || value === null) return false;

  const record = value as Record<string, unknown>;

  if (record.success === true) return true;
  if (record.success !== false) return false;

  const error = record.error;
  if (typeof error !== "object" || error === null) return false;

  const errorRecord = error as Record<string, unknown>;
  if (errorRecord.code === "VALIDATION_ERROR") return true;

  return (
    errorRecord.code === "SERVER_ERROR" &&
    typeof errorRecord.message === "string"
  );
}

export async function submitContact(
  payload: ContactPayload
): Promise<ContactApiResponse> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data: unknown = await response.json();

    if (!isContactApiResponse(data)) {
      return FALLBACK_SERVER_ERROR;
    }

    return data;
  } catch {
    return FALLBACK_SERVER_ERROR;
  }
}
