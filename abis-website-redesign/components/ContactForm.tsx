"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  Mail,
  Phone,
  User,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

const servicesOptions = [
  "Permanent Recruitment Services",
  "Contract Staffing Solutions",
  "Executive Search & RPO",
  "Corporate Training & Learning",
  "HR Services & Advisory",
  "Application Development & Support",
  "Enterprise Workforce Consultation",
  "Other Business Inquiry",
];

export default function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: initialService || servicesOptions[0],
    enquiryType: "business" as "business" | "partner" | "general",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit enquiry.");
      }

      setSuccessData({
        referenceId: json.data?.referenceId || "ABIS-REQ",
        message: json.message,
      });
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "An error occurred. Please contact us directly at hr@akshayaitsolutions.com or 040-48546345."
      );
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-emerald-500/30 text-center space-y-5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-fg">Enquiry Received</h3>
        <p className="text-sm text-fg-muted max-w-lg mx-auto leading-relaxed">
          {successData.message}
        </p>
        <div className="inline-block px-4 py-2 rounded-xl bg-fg/5 border border-theme/60 font-mono text-xs text-accent-fg">
          Tracking Reference: {successData.referenceId}
        </div>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSuccessData(null);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                companyName: "",
                service: servicesOptions[0],
                enquiryType: "business",
                message: "",
              });
            }}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-fg-muted hover:text-fg bg-fg/5 hover:bg-fg/5 border border-theme/60 transition-colors"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-3xl bg-surface border border-theme/60 shadow-2xl space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-fg tracking-tight">
          Discuss Your Business Requirements
        </h3>
        <p className="text-xs text-fg-subtle mt-1">
          Complete the form below to connect with our client solutions team in India or the USA.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-xs text-rose-300">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600 dark:text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Enquiry Type Selector */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
          Enquiry Nature
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "business", label: "Client Staffing" },
            { id: "partner", label: "Strategic Partnership" },
            { id: "general", label: "General Inquiry" },
          ].map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() =>
                setFormData({ ...formData, enquiryType: type.id as any })
              }
              className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                formData.enquiryType === type.id
                  ? "bg-abis-blue text-on-accent border-abis-blue shadow-md"
                  : "bg-fg/5 text-fg-subtle border-theme/60 hover:border-theme/60 hover:text-fg"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="fullName"
            className="text-xs font-medium text-fg-muted flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-accent-fg" />
            Full Name <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-fg/5 border border-theme/60 focus:border-abis-blue focus:bg-fg/5 outline-none text-sm text-fg placeholder-fg-subtle transition-colors"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="companyName"
            className="text-xs font-medium text-fg-muted flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-accent-fg" />
            Company / Organization <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            placeholder="Acme Technologies"
            className="w-full px-4 py-3 rounded-xl bg-fg/5 border border-theme/60 focus:border-abis-blue focus:bg-fg/5 outline-none text-sm text-fg placeholder-fg-subtle transition-colors"
          />
        </div>

        {/* Business Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-fg-muted flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-accent-fg" />
            Business Email <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl bg-fg/5 border border-theme/60 focus:border-abis-blue focus:bg-fg/5 outline-none text-sm text-fg placeholder-fg-subtle transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-fg-muted flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-accent-fg" />
            Direct Contact Number <span className="text-red-600 dark:text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+1 (555) 000-0000 / +91 ..."
            className="w-full px-4 py-3 rounded-xl bg-fg/5 border border-theme/60 focus:border-abis-blue focus:bg-fg/5 outline-none text-sm text-fg placeholder-fg-subtle transition-colors"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-1.5">
        <label
          htmlFor="service"
          className="text-xs font-medium text-fg-muted flex items-center gap-1.5"
        >
          <HelpCircle className="w-3.5 h-3.5 text-accent-fg" />
          Primary Service of Interest <span className="text-red-600 dark:text-red-400">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl bg-surface border border-theme/60 focus:border-abis-blue outline-none text-sm text-fg transition-colors cursor-pointer"
        >
          {servicesOptions.map((opt, i) => (
            <option key={i} value={opt} className="bg-surface text-fg">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium text-fg-muted flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-accent-fg" />
          Project Scope / Headcount Details <span className="text-red-600 dark:text-red-400">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Briefly describe your requirements, timeline, target technical skills, or location preferences..."
          className="w-full px-4 py-3 rounded-xl bg-fg/5 border border-theme/60 focus:border-abis-blue focus:bg-fg/5 outline-none text-sm text-fg placeholder-fg-subtle transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-sm text-on-accent bg-abis-blue hover:bg-abis-blue-hover disabled:opacity-50 transition-all duration-300 shadow-[0_4px_25px_rgba(32,109,247,0.4)]"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Validating &amp; Submitting...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Business Requirement</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-fg-subtle text-center leading-relaxed">
        Looking for career opportunities? Please visit our{" "}
        <a href="/careers" className="text-accent-fg hover:underline">
          Careers Portal
        </a>{" "}
        or submit your CV to hr@akshayaitsolutions.com.
      </p>
    </form>
  );
}
