import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  companyName: z.string().min(2, "Company name is required"),
  service: z.string().min(1, "Please select a service of interest"),
  enquiryType: z.enum(["business", "partner", "general"]).default("business"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // In a live production environment with configured SMTP/CRM (e.g., SendGrid, Resend, HubSpot):
    // await sendEmailNotification(validated);
    console.log("[ABIS Contact Enquiry Received]", {
      timestamp: new Date().toISOString(),
      ...validated,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Akshaya Business IT Solutions. Your requirement has been logged with our client engagement team. An enterprise practice lead will contact you within 24 business hours.",
      data: {
        referenceId: `ABIS-REQ-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted form errors.",
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
        message: "An internal server error occurred while submitting your enquiry. Please try again or email hr@akshayaitsolutions.com directly.",
      },
      { status: 500 }
    );
  }
}
