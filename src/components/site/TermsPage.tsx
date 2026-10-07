import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { FileText, Shield, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export function TermsPage() {
  const breadcrumbs = [{ label: "Terms & Conditions", href: "/terms" }];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      <Nav />
      <Breadcrumbs items={breadcrumbs} className="pt-24 lg:pt-28" />

      {/* Header */}
      <header className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
            <FileText className="h-3.5 w-3.5 text-sky-400" />
            Steam On Wheels LLC — Service Agreement
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            Last updated: October 8, 2026 • Effective Date: January 1, 2024
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Shield className="h-5 w-5 text-sky-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the website of Steam On Wheels, LLC (<a href="https://steamonwheelsnc.com/" className="text-sky-400 hover:underline">steamonwheelsnc.com</a>), requesting a quote, or hiring our team for residential or commercial exterior cleaning, pressure washing, soft washing, or painting prep services, you agree to be bound by the following terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-sky-400" />
              2. Estimates, Scope of Work &amp; Pricing
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li><strong>Free Estimates:</strong> Quotes are based on visual inspection, client-provided specifications, or digital satellite measurements. Estimates remain valid for 30 calendar days from issuance.</li>
              <li><strong>Scope of Work:</strong> We perform strictly the exterior cleaning services specified in the approved written quote or invoice. Any unforeseen substrate issues (e.g., rotted wood concealed beneath algae or damaged electrical wiring) will be communicated immediately prior to proceeding.</li>
              <li><strong>Water &amp; Power Access:</strong> Residential and commercial clients agree to provide access to an uninterrupted on-site exterior water source with standard residential pressure unless prior arrangements for water transport have been contracted in writing.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. Property Preparation &amp; Client Responsibilities
            </h2>
            <p>To ensure maximum safety and property protection during cleaning:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>Ensure all windows and exterior doors are firmly latched and shut prior to our crew's arrival.</li>
              <li>Move fragile outdoor patio furniture, potted plants, decorations, and vehicles away from the immediate cleaning zones.</li>
              <li>Keep pets and children safely indoors for the duration of the washing process.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Licensing, Insurance &amp; Liability
            </h2>
            <p>
              Steam On Wheels, LLC is fully licensed and maintains $2,000,000 in comprehensive commercial general liability insurance. Certificates of Insurance (COI) are readily provided upon request for commercial property managers, HOAs, and general contractors.
            </p>
            <p>
              While we utilize calibrated low-pressure soft washing techniques to protect delicate siding, roofs, and stucco, Steam On Wheels is not liable for pre-existing structural defects, prior stucco cracking, failed double-pane window seals with internal fogging, or pre-existing siding oxidation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Satisfaction Guarantee &amp; Warranties
            </h2>
            <p>
              We stand behind our workmanship with a 100% Satisfaction Guarantee. If any area was missed or does not meet our high standards, notify David Hudson within 48 hours of service completion, and our team will return promptly to re-treat the area at no additional charge.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Contact Information
            </h2>
            <p>For questions or inquiries regarding these Terms &amp; Conditions:</p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <p className="font-bold text-white">Steam On Wheels, LLC</p>
              <p className="flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4 text-sky-400" /> 107 Kase Ct, Mooresville, NC 28115</p>
              <p className="flex items-center gap-2 text-sm text-slate-300"><Phone className="h-4 w-4 text-sky-400" /> (704) 516-9509</p>
              <p className="flex items-center gap-2 text-sm text-slate-300"><Mail className="h-4 w-4 text-sky-400" /> motivate71@yahoo.com</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
