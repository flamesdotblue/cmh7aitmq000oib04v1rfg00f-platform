import React from "react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg aria-hidden="true" className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#e0f2fe"/>
              <stop offset="100%" stopColor="#f0f9ff"/>
            </linearGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#waveGrad)" />
          <path d="M0 250 Q150 200 300 250 T600 250 T900 250 T1200 250" fill="none" stroke="#bae6fd" strokeWidth="2" opacity="0.6"/>
          <path d="M0 280 Q150 230 300 280 T600 280 T900 280 T1200 280" fill="none" stroke="#93c5fd" strokeWidth="2" opacity="0.5"/>
          <path d="M0 310 Q150 260 300 310 T600 310 T900 310 T1200 310" fill="none" stroke="#7dd3fc" strokeWidth="2" opacity="0.4"/>
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 lg:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700 ring-1 ring-sky-200">Trusted Speech & Hearing Care</span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Helping You Hear and Speak with Confidence.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Personalized hearing and speech therapy for adults and children. Our clinicians combine compassion with the latest technology to help you connect with the moments that matter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
              Book an Appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sky-700 ring-1 ring-sky-200 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2">
              Get a Free Hearing Test
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> ASHA Certified Clinicians</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Insurance Accepted</li>
            <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span> Family-Friendly Care</li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-sky-100/60 blur-2xl"></div>
          <img
            src="https://images.unsplash.com/photo-1628887650692-a406d9c0889b?q=80&w=1400&auto=format&fit=crop"
            alt="Smiling audiologist helping a patient during a hearing test"
            className="h-full w-full rounded-2xl object-cover shadow-xl ring-1 ring-sky-200/60"
          />
        </div>
      </div>
    </header>
  );
}
