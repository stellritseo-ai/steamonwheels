import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { Shield, Lock, Eye, FileText, Phone, Mail, MapPin } from "lucide-react";

export function PrivacyPage() {
  const breadcrumbs = [{ label: "Privacy Policy", href: "/privacy" }];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      <Nav />
      <Breadcrumbs items={breadcrumbs} className="pt-24 lg:pt-28" />

      {/* Header */}
      <header className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="h-3.5 w-3.5 text-sky-400" />
            Steam On Wheels LLC — Legal &amp; Privacy
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Privacy Policy
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
              <Eye className="h-5 w-5 text-sky-400" />
              1. Introduction &amp; Scope
            </h2>
            <p>
              Steam On Wheels, LLC ("Steam On Wheels," "we," "our," or "us"), headquartered at 107 Kase Ct, Mooresville, NC 28115, is committed to respecting and protecting the privacy of our website visitors, residential customers, and commercial clients throughout North Carolina.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website at <a href="https://steamonwheelsnc.com/" className="text-sky-400 hover:underline">steamonwheelsnc.com</a>, request a pressure washing or exterior cleaning estimate, or communicate with our team.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <FileText className="h-5 w-5 text-sky-400" />
              2. Information We Collect
            </h2>
            <p>
              We only collect information necessary to provide accurate quotes, schedule exterior cleaning services, and communicate with you regarding your property:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li><strong>Contact Information:</strong> Name, phone number, email address, physical property address, and service zip code provided when submitting our estimate form or contacting us.</li>
              <li><strong>Project Details:</strong> Information regarding the services requested (e.g., roof washing, house soft washing, concrete cleaning), square footage, specific stains, and property type (residential/commercial).</li>
              <li><strong>Technical Data:</strong> Browser type, operating system, IP address, referral source, and pages viewed, collected automatically via standard server logs and privacy-centric analytics.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Lock className="h-5 w-5 text-sky-400" />
              3. How We Use Your Information
            </h2>
            <p>We use your personal information strictly for legitimate business purposes:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>To prepare and deliver itemized, free exterior cleaning estimates.</li>
              <li>To coordinate dispatch, on-site evaluations, and service execution.</li>
              <li>To provide customer support and answer technical questions regarding soft washing and pressure washing.</li>
              <li>To send invoices, receipts, and service confirmation notifications.</li>
              <li>To maintain website security and prevent fraudulent activity.</li>
            </ul>
            <p className="font-semibold text-white bg-slate-900 border border-slate-800 p-4 rounded-xl">
              We NEVER sell, rent, trade, or share your personal contact information with third-party marketers, advertisers, or lead generators.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. SMS &amp; Telephone Communications
            </h2>
            <p>
              By providing your telephone number to Steam On Wheels, LLC, you consent to receive direct telephone calls or SMS text messages regarding your service request, estimate delivery, or appointment scheduling. You may opt out of SMS communications at any time by replying "STOP".
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We retain customer information only as long as necessary to fulfill business obligations, maintain warranties, and comply with state and federal legal requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Contact Our Privacy Officer
            </h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact founder David Hudson directly:</p>
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
