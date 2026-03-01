import { DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT } from "./route";

const validPayload = {
  name: "Rausha Ahmed",
  email: "rausha@example.com",
  message: "Hello, I would like to discuss a project together.",
  subject: "Project inquiry",
};

function createRequest(payload: unknown): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns success for a valid payload", async () => {
    const response = await POST(createRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ success: true });
  });

  it("returns 400 for malformed JSON", async () => {
    const badRequest = {
      json: jest.fn().mockRejectedValue(new Error("Malformed JSON")),
    } as unknown as Request;

    const response = await POST(badRequest);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid input",
      },
    });
  });

  it("returns 400 with field errors for invalid payload", async () => {
    const response = await POST(createRequest({ name: "A", email: "bad", message: "short" }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.success).toBe(false);
    expect(body.error.code).toBe("VALIDATION_ERROR");
    expect(body.error.message).toBe("Invalid input");
    expect(body.error.fieldErrors.name).toBeDefined();
    expect(body.error.fieldErrors.email).toBeDefined();
    expect(body.error.fieldErrors.message).toBeDefined();
  });

  it("returns 400 for unexpected payload fields", async () => {
    const response = await POST(createRequest({ ...validPayload, extra: "nope" }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.success).toBe(false);
    expect(body.error.code).toBe("VALIDATION_ERROR");
  });

  it("returns 500 when an unexpected server error occurs", async () => {
    jest.spyOn(console, "log").mockImplementation(() => {
      throw new Error("logging failed");
    });

    const response = await POST(createRequest(validPayload));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({
      success: false,
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    });
  });
});

describe("Non-POST methods", () => {
  it.each([
    ["GET", GET],
    ["PUT", PUT],
    ["PATCH", PATCH],
    ["DELETE", DELETE],
    ["HEAD", HEAD],
    ["OPTIONS", OPTIONS],
  ])("returns 405 for %s", async (methodName, handler) => {
    const response = await handler();
    const body = await response.json();

    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toBe("POST");
    expect(body).toEqual({
      success: false,
      error: {
        code: "METHOD_NOT_ALLOWED",
        message: `Method ${methodName} is not allowed. Use POST.`,
      },
    });
  });
});
