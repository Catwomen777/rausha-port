import { NextResponse } from "next/server";
import {
  type ContactApiResponse,
  validateContactPayload,
} from "@/lib/validation/contactSchemas";

export async function POST(request: Request) {
  try {
    let payload: unknown;

    try {
      payload = await request.json();
    } catch {
      const response: ContactApiResponse = {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          fieldErrors: {},
        },
      };

      return NextResponse.json(response, { status: 400 });
    }

    const parsed = validateContactPayload(payload);

    if (!parsed.success) {
      const response: ContactApiResponse = {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
      };

      return NextResponse.json(response, { status: 400 });
    }

    console.log("[contact]", parsed.data);

    const response: ContactApiResponse = { success: true };
    return NextResponse.json(response, { status: 200 });
  } catch {
    const response: ContactApiResponse = {
      success: false,
      error: {
        code: "SERVER_ERROR",
        message: "Something went wrong",
      },
    };

    return NextResponse.json(response, { status: 500 });
  }
}
