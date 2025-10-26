import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-3 max-w-xl text-slate-600">
            We’re here to answer your questions and help you schedule the care you need. Reach out by phone or email, or send us a message and our team will get back to you shortly.
          </p>

          <dl className="mt-8 space-y-4 text-slate-700">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-sky-600" />
              <div>
                <dt className="font-medium text-slate-900">Phone</dt>
                <dd>
                  <a href="tel:+1234567890" className="text-sky-700 hover:underline">(123) 456-7890</a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-sky-600" />
              <div>
                <dt className="font-medium text-slate-900">Email</dt>
                <dd>
                  <a href="mailto:care@clarityclinic.com" className="text-sky-700 hover:underline">care@clarityclinic.com</a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-sky-600" />
              <div>
                <dt className="font-medium text-slate-900">Address</dt>
                <dd>
                  123 Harmony Ave, Suite 200, Riverdale, NY 10471
                  <div>
                    <a
                      href="https://maps.google.com/?q=123+Harmony+Ave+Riverdale+NY+10471"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-700 hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-sky-600" />
              <div>
                <dt className="font-medium text-slate-900">Hours</dt>
                <dd>Mon–Fri: 8:30am – 6:00pm • Sat: 9:00am – 2:00pm</dd>
              </div>
            </div>
          </dl>
        </div>

        <form className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">Send us a message</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name</label>
              <input id="name" name="name" type="text" className="mt-2 w-full rounded-md border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input id="email" name="email" type="email" className="mt-2 w-full rounded-md border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
              <input id="phone" name="phone" type="tel" className="mt-2 w-full rounded-md border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="(123) 456-7890" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service</label>
              <select id="service" name="service" className="mt-2 w-full rounded-md border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200">
                <option>Hearing Test</option>
                <option>Speech Therapy</option>
                <option>Hearing Aids</option>
                <option>Pediatric Care</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-2 w-full rounded-md border-slate-300 bg-slate-50 px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="How can we help?" />
            </div>
          </div>
          <button type="submit" className="mt-5 w-full rounded-md bg-sky-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
            Submit
          </button>
          <p className="mt-3 text-center text-xs text-slate-500">By submitting, you agree to our privacy policy.</p>
        </form>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Clarity Speech & Hearing Clinic • All rights reserved
      </footer>
    </section>
  );
}
