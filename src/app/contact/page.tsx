import Link from "next/link";
import { Section } from "@/components/section";

export const metadata = {
  title: "Contact | SBJ Studio"
};

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let’s design your next growth milestone"
      description="Tell us about your project. SBJ Studio is based in Nigeria and partners with clients globally."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-white/10 bg-surface p-6">
          <label className="block text-sm">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Project Details
            <textarea
              name="details"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black"
          >
            Send Inquiry
          </button>
        </form>

        <aside className="rounded-2xl border border-white/10 bg-surface p-6">
          <h3 className="text-2xl font-black">Direct Channels</h3>
          <p className="mt-3 text-muted">
            Prefer a direct conversation? Reach us instantly through WhatsApp or email.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <p>
              WhatsApp:{" "}
              <Link className="text-accent hover:underline" href="https://wa.me/2348169576864">
                08169576864
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link
                className="text-accent hover:underline"
                href="mailto:sbjdesigns.ng@gmail.com"
              >
                sbjdesigns.ng@gmail.com
              </Link>
            </p>
            <p className="text-muted">Location: Nigeria - Serving clients worldwide.</p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
