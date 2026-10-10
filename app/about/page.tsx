import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Build fast",
    description: "We ship small, learn quickly, and iterate on what works.",
  },
  {
    title: "Stay curious",
    description: "Every project is a chance to try something new.",
  },
  {
    title: "Work together",
    description: "Good ideas come from anyone on the team.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-zinc-50 px-4 py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl">
        <section className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            About us
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            This is the about page
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            We&apos;re a small team building this project for a hackathon.
            Here&apos;s a little about who we are and what we care about.
          </p>
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {value.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {value.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 text-center">
          <Link
            href="/login"
            className="inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Get started
          </Link>
        </section>
      </div>
    </main>
  );
}
