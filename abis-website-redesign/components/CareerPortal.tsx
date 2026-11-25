"use client";

import { useState } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  Filter,
  CheckCircle2,
  Upload,
  X,
  Loader2,
  FileText,
  AlertCircle,
  Building,
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

const verifiedOpenings: JobOpening[] = [
  {
    id: "abis-rec-01",
    title: "Senior Technical Recruiter (Semiconductor & Embedded Systems)",
    department: "Talent Acquisition",
    location: "Hyderabad (Vasavi Sky City) / Bengaluru",
    type: "Full-Time",
    experience: "4 - 8 Years",
    summary:
      "Drive end-to-end recruitment process cycles for tier-1 semiconductor and EDA captive clients across VLSI, ASIC design, FPGA, and embedded software.",
    responsibilities: [
      "Manage full-lifecycle recruitment for specialized hardware and embedded software engineers.",
      "Partner with technical client hiring managers to understand silicon and firmware specifications.",
      "Conduct in-depth technical screening, compensation negotiation, and candidate engagement.",
      "Maintain high offer-to-joining ratios through proactive candidate relationship management.",
    ],
    requirements: [
      "Proven track record in VLSI, Semiconductor, or Embedded Systems recruitment.",
      "Strong understanding of RPC optimization, niche sourcing platforms, and referral networks.",
      "Excellent communication and enterprise client stakeholder management skills.",
    ],
  },
  {
    id: "abis-rec-02",
    title: "Lead IT Recruiter (Enterprise Cloud & Full-Stack)",
    department: "Talent Acquisition",
    location: "Hyderabad / Bengaluru",
    type: "Full-Time",
    experience: "5 - 9 Years",
    summary:
      "Lead technical sourcing sprints for Fortune 500 MNC captive development centers across Java, Python, Cloud (AWS/Azure/GCP), DevOps, and Data Engineering.",
    responsibilities: [
      "Execute niche search strategies for senior architects, engineering managers, and tech leads.",
      "Mentor junior sourcing specialists on RPC pipeline hygiene and Boolean techniques.",
      "Oversee candidate pipeline tracking, interview scheduling, and feedback coordination.",
    ],
    requirements: [
      "Extensive experience recruiting full-stack and cloud engineering professionals.",
      "Familiarity with modern enterprise tech stacks, microservices, and distributed systems.",
    ],
  },
  {
    id: "abis-bd-01",
    title: "Client Partner / Business Development Manager (IT Staffing)",
    department: "Client Engagement",
    location: "Hyderabad / Bengaluru / USA (Remote/Hybrid)",
    type: "Full-Time",
    experience: "6 - 12 Years",
    summary:
      "Cultivate strategic relationships with enterprise tech leadership and HR directors, expanding ABIS contract staffing and permanent recruitment partnerships.",
    responsibilities: [
      "Identify and onboard new enterprise client accounts across India and US markets.",
      "Negotiate master service agreements (MSAs) and statement of work (SOW) terms.",
      "Collaborate with internal delivery leads to fulfill high-priority client headcount mandates.",
    ],
    requirements: [
      "Demonstrated success in B2B IT staffing or consulting sales with Fortune 500 / MNC clientele.",
      "Deep understanding of commercial billing rates, margins, and contract staffing dynamics.",
    ],
  },
  {
    id: "abis-hr-01",
    title: "HR Advisory & People Operations Executive",
    department: "Human Resources",
    location: "Hyderabad (Vasavi Sky City)",
    type: "Full-Time",
    experience: "3 - 6 Years",
    summary:
      "Support internal culture initiatives, meritocracy frameworks, employee engagement, and client HR advisory assignments.",
    responsibilities: [
      "Champion employee engagement, learning & development workshops, and team wellness.",
      "Assist in structuring HR advisory frameworks and performance review cycles.",
      "Coordinate onboarding and induction for internal consultants and contract staff.",
    ],
    requirements: [
      "Degree in Human Resources, Business Administration, or related discipline.",
      "Passion for people-oriented culture building and continuous organizational learning.",
    ],
  },
];

export default function CareerPortal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);

  // Application form state
  const [applicant, setApplicant] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceYears: "",
    currentCompany: "",
    noticePeriod: "Immediate / 15 Days",
    linkedinUrl: "",
    coverNote: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const departments = ["All", "Talent Acquisition", "Client Engagement", "Human Resources"];

  const filteredJobs = verifiedOpenings.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  const handleApply = (job: JobOpening) => {
    setActiveJob(job);
    setApplicationSuccess(null);
    setFormError(null);
  };

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      setFormError("Please attach your resume in PDF or DOCX format.");
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...applicant,
          jobId: activeJob?.id,
          jobTitle: activeJob?.title,
          fileName: selectedFile.name,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit application.");
      }

      setApplicationSuccess(json.data?.applicationId || "ABIS-APP");
    } catch (err: any) {
      setFormError(
        err.message ||
          "Failed to submit. You can also email your CV directly to hr@akshayaitsolutions.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Search & Filter Bar */}
      <div className="p-6 rounded-3xl bg-surface border border-theme/60 flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-fg-subtle absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search roles by title, technology, or location..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-fg/5 border border-theme/60 focus:border-abis-blue outline-none text-sm text-fg placeholder-fg-subtle"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedDept === dept
                  ? "bg-abis-blue text-on-accent"
                  : "bg-fg/5 text-fg-subtle hover:text-fg hover:bg-fg/5 border border-theme/60"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-fg-subtle px-2">
          <span>Showing {filteredJobs.length} Verified Position{filteredJobs.length === 1 ? "" : "s"}</span>
          <span>Locations: Hyderabad &bull; Bengaluru &bull; USA</span>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="p-12 rounded-3xl bg-fg/5 border border-theme/60 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-fg-subtle mx-auto" />
            <h4 className="text-lg font-bold text-fg">No exact role matched your query</h4>
            <p className="text-xs text-fg-subtle max-w-md mx-auto">
              We are constantly seeking outstanding recruitment consultants and account partners. Send your resume directly to hr@akshayaitsolutions.com for future openings.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-surface border border-theme/60 hover:border-abis-blue/40 transition-all duration-300 space-y-6 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-theme/60">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-abis-blue/15 text-accent-fg border border-abis-blue/30">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-fg/5 text-fg-muted">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-fg group-hover:text-accent-fg transition-colors">
                      {job.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApply(job)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-colors shadow-lg shrink-0"
                  >
                    <span>Apply for Role</span>
                  </button>
                </div>

                <p className="text-sm text-fg-muted leading-relaxed">
                  {job.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-fg uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-fg-subtle">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-fg shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-fg uppercase tracking-wider">
                      Target Qualifications
                    </h4>
                    <ul className="space-y-1.5 text-xs text-fg-subtle">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-fg shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-theme/60 flex flex-wrap items-center gap-6 text-xs text-fg-subtle">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-fg" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-fg" />
                    Experience: {job.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
          <div className="bg-surface border border-theme/60 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-fg-subtle hover:text-fg bg-fg/5 hover:bg-fg/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-fg">Application Successfully Logged</h3>
                <p className="text-xs text-fg-muted max-w-md mx-auto leading-relaxed">
                  Your profile for <strong className="text-fg">{activeJob.title}</strong> has been received by our talent team.
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-fg/5 border border-theme/60 font-mono text-xs text-accent-fg">
                  Tracking Code: {applicationSuccess}
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveJob(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-on-accent bg-abis-blue hover:bg-abis-blue-hover transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submitApplication} className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase text-accent-fg tracking-wider">
                    Application Form
                  </span>
                  <h3 className="text-xl font-bold text-fg mt-1">
                    Apply for {activeJob.title}
                  </h3>
                  <p className="text-xs text-fg-subtle">
                    Location: {activeJob.location} &bull; Experience: {activeJob.experience}
                  </p>
                </div>

                {formError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-fg-muted block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.fullName}
                      onChange={(e) =>
                        setApplicant({ ...applicant, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-fg-muted block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicant.email}
                      onChange={(e) =>
                        setApplicant({ ...applicant, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-fg-muted block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicant.phone}
                      onChange={(e) =>
                        setApplicant({ ...applicant, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue"
                      placeholder="+91 / +1 ..."
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-fg-muted block mb-1">
                      Total Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.experienceYears}
                      onChange={(e) =>
                        setApplicant({
                          ...applicant,
                          experienceYears: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue"
                      placeholder="e.g. 5 Years"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-fg-muted block mb-1">
                      Current Company
                    </label>
                    <input
                      type="text"
                      value={applicant.currentCompany}
                      onChange={(e) =>
                        setApplicant({
                          ...applicant,
                          currentCompany: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue"
                      placeholder="Current Employer"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-fg-muted block mb-1">
                      Notice Period
                    </label>
                    <input
                      type="text"
                      value={applicant.noticePeriod}
                      onChange={(e) =>
                        setApplicant({
                          ...applicant,
                          noticePeriod: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue"
                      placeholder="e.g. 30 Days / Immediate"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="text-xs font-medium text-fg-muted block mb-1">
                    Upload Resume (PDF, DOC, DOCX) *
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-theme/60 hover:border-abis-blue bg-fg/5 cursor-pointer transition-colors">
                    <Upload className="w-6 h-6 text-accent-fg mb-2" />
                    <span className="text-xs text-fg-muted">
                      {selectedFile ? (
                        <span className="font-semibold text-accent-fg">
                          {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
                        </span>
                      ) : (
                        "Click to select resume document"
                      )}
                    </span>
                    <span className="text-[10px] text-fg-subtle mt-1">
                      Max file size: 5MB
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setSelectedFile(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <label className="text-xs font-medium text-fg-muted block mb-1">
                    Brief Note or Key Skills
                  </label>
                  <textarea
                    rows={2}
                    value={applicant.coverNote}
                    onChange={(e) =>
                      setApplicant({ ...applicant, coverNote: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-fg/5 border border-theme/60 text-xs text-fg outline-none focus:border-abis-blue resize-none"
                    placeholder="Relevant domains, certifications, or career goals..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs text-on-accent bg-abis-blue hover:bg-abis-blue-hover disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <span>Submit Candidate Application</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
