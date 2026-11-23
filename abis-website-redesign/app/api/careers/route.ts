import { NextResponse } from "next/server";
import { z } from "zod";

const careerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  jobId: z.string().min(1, "Job reference is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  experienceYears: z.string().min(1, "Please specify years of experience"),
  currentCompany: z.string().optional(),
  noticePeriod: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  coverNote: z.string().optional(),
  fileName: z.string().min(1, "Resume attachment is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = careerSchema.parse(body);

    console.log("[ABIS Career Application Received]", {
      timestamp: new Date().toISOString(),
      ...validated,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your application has been received by the ABIS Talent Acquisition team. If your profile matches our client or internal mandate, our recruiters will connect with you.",
      data: {
        applicationId: `ABIS-APP-${Math.floor(100000 + Math.random() * 900000)}`,
        jobTitle: validated.jobTitle,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required application fields.",
          errors: error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit career application. Please email your resume directly to hr@akshayaitsolutions.com.",
      },
      { status: 500 }
    );
  }
}
