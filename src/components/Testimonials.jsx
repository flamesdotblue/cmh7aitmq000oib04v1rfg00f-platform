import React from "react";
import { Star, CheckCircle, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Rita S.",
    quote:
      "The team was kind, patient, and incredibly thorough. My new hearing aids changed my everyday life!",
  },
  {
    name: "Daniel K. (Parent)",
    quote:
      "Our son's speech sessions are fun and effective—he looks forward to every visit and we see real progress.",
  },
  {
    name: "George M.",
    quote:
      "From testing to fitting, everything felt professional and comfortable. Highly recommend this clinic!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Trusted by Families</h2>
          <p className="mt-3 text-slate-600">Compassionate care backed by credentials and results.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-700 ring-1 ring-emerald-100">
            <CheckCircle className="h-4 w-4" /> ASHA Certified
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sky-700 ring-1 ring-sky-100">
            <Shield className="h-4 w-4" /> HIPAA Compliant
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 ring-1 ring-indigo-100">
            <CheckCircle className="h-4 w-4" /> Board-Certified Audiologists
          </div>
        </div>
      </div>
    </section>
  );
}
