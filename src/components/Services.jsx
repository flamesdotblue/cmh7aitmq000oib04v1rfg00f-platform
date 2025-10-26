import React from "react";
import { Ear, Mic, Headphones, Users } from "lucide-react";

const services = [
  {
    title: "Hearing Tests",
    icon: Ear,
    desc: "Comprehensive diagnostic evaluations to understand your hearing health and recommend the best next steps.",
  },
  {
    title: "Speech Therapy",
    icon: Mic,
    desc: "Support for articulation, language, fluency, and voice—personalized for children and adults.",
  },
  {
    title: "Hearing Aids",
    icon: Headphones,
    desc: "Modern, discreet devices expertly fitted and tuned for comfort, clarity, and confidence.",
  },
  {
    title: "Pediatric Care",
    icon: Users,
    desc: "Gentle, kid-friendly evaluations and therapies in a calm, welcoming environment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
        <p className="mt-3 text-slate-600">Evidence-based care tailored to your goals—delivered by compassionate specialists.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article key={s.title} className="group rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
              <s.icon aria-hidden className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            <div className="mt-4 text-sm font-medium text-sky-700 opacity-0 transition group-hover:opacity-100">Learn more →</div>
          </article>
        ))}
      </div>
    </section>
  );
}
