import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  subject: z.preprocess(
    (value) => {
      if (typeof value !== "string") return value;
      const trimmed = value.trim();
      return trimmed.length === 0 ? undefined : trimmed;
    },
    z.string().max(120).optional()
  ),
  message: z.string().trim().min(10).max(2000),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactPayload, string[]>>;

export type ContactApiResponse =
  | { success: true }
  | {
      success: false;
      error:
        | {
            code: "VALIDATION_ERROR";
            fieldErrors: ContactFieldErrors;
          }
        | {
            code: "SERVER_ERROR";
            message: string;
          };
    };

export function validateContactPayload(input: unknown) {
  return contactSchema.safeParse(input);
}
