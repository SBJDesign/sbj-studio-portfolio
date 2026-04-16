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
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-6">
      <label className="block text-sm">
        Name
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>
      <label className="block text-sm">
        Email
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>
      <label className="block text-sm">
        Project Details
        <textarea
          name="details"
          rows={5}
          required
          value={form.details}
          onChange={(event) => setForm((prev) => ({ ...prev, details: event.target.value }))}
          className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
      {status !== "idle" ? (
        <p className={`text-sm ${status === "success" ? "text-accent" : "text-red-300"}`}>{message}</p>
      ) : null}
    </form>
  );
}
