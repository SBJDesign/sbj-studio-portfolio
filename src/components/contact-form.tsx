"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  details: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", details: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to send inquiry.");
      }

      setStatus("success");
      setMessage(data.message ?? "Your inquiry has been sent.");
      setForm({ name: "", email: "", details: "" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <p className="pb-4 text-[17px] text-white/70">Share a short brief and we will get back to you.</p>
      <label className="block text-[13px] uppercase tracking-[0.04em] text-white/45">
        Name
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="field normal-case tracking-normal"
        />
      </label>
      <label className="block text-[13px] uppercase tracking-[0.04em] text-white/45">
        Email
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="field normal-case tracking-normal"
        />
      </label>
      <label className="block text-[13px] uppercase tracking-[0.04em] text-white/45">
        Project details
        <textarea
          name="details"
          rows={5}
          required
          value={form.details}
          onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))}
          className="field min-h-[140px] resize-y normal-case tracking-normal"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] text-ink transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send enquiry →"}
      </button>
      {status !== "idle" ? (
        <p
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`text-sm ${status === "success" ? "text-accent" : "text-red-300"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
