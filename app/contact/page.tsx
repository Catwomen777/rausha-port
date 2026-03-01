"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { submitContact } from "@/lib/services/contactService";
import {
  type ContactFieldErrors,
  validateContactPayload,
} from "@/lib/validation/contactSchemas";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Single source of truth for clearing or resetting form state.
const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function getFirstError(
  fieldErrors: ContactFieldErrors,
  field: keyof FormValues
): string | undefined {
  // Each field maps to an array of validation messages; show only the first one.
  const errors = fieldErrors[field];
  return errors && errors.length > 0 ? errors[0] : undefined;
}

export default function ContactPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const key = name as keyof FormValues;

    setValues((current) => ({
      ...current,
      [key]: value,
    }));

    // Clear error for the field being edited so stale messages disappear quickly.
    setFieldErrors((current) => ({
      ...current,
      [key]: undefined,
    }));

    setGeneralError(null);
    setIsSent(false);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Reset global status before each submission attempt.
    setGeneralError(null);
    setIsSent(false);

    // Run client-side schema validation before calling the API.
    const parsed = validateContactPayload(values);

    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    // Lock the form while request is in flight to prevent duplicate submissions.
    setIsLoading(true);
    const result = await submitContact(parsed.data);
    setIsLoading(false);

    if (result.success) {
      // Successful send: clear form and show confirmation state.
      setValues(initialValues);
      setFieldErrors({});
      setIsSent(true);
      return;
    }

    if (result.error.code === "VALIDATION_ERROR") {
      // Server-side validation can still fail; map field errors back to UI.
      setFieldErrors(result.error.fieldErrors);
      return;
    }

    // Non-validation failures (network/server) surface as a general banner.
    setGeneralError(result.error.message);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <main className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
        <p className="mt-2 text-sm text-slate-600">Send me a message.</p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={onChange}
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            />
            {getFirstError(fieldErrors, "name") ? (
              <p className="mt-1 text-sm text-rose-600">{getFirstError(fieldErrors, "name")}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            />
            {getFirstError(fieldErrors, "email") ? (
              <p className="mt-1 text-sm text-rose-600">{getFirstError(fieldErrors, "email")}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-800">
              Subject (optional)
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={onChange}
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            />
            {getFirstError(fieldErrors, "subject") ? (
              <p className="mt-1 text-sm text-rose-600">{getFirstError(fieldErrors, "subject")}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              value={values.message}
              onChange={onChange}
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
            />
            {getFirstError(fieldErrors, "message") ? (
              <p className="mt-1 text-sm text-rose-600">{getFirstError(fieldErrors, "message")}</p>
            ) : null}
          </div>

          {generalError ? (
            <p className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {generalError}
            </p>
          ) : null}

          {isSent ? (
            <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              Message sent
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </main>
    </div>
  );
}
