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
    <form onSubmit={handleSubmit} className="card-dark space-y-5 !p-8">
      <div>
        <h3 className="text-lg font-bold text-text">Project inquiry</h3>
        <p className="mt-1 text-sm text-muted">Share a short brief — we respond within one business day.</p>
      </div>
      <label className="block text-sm font-medium text-text/90">
        Name
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="input-field"
        />
      </label>
      <label className="block text-sm font-medium text-text/90">
        Email
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="input-field"
        />
      </label>
      <label className="block text-sm font-medium text-text/90">
        Project Details
        <textarea
          name="details"
          rows={5}
          required
          value={form.details}
          onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))}
          className="input-field min-h-[140px] resize-y"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
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
