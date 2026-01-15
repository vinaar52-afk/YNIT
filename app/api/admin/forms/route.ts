import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdmin(request);
    if (!admin) {
      return NextResponse.json({ success: false, data: null, error: "Unauthorized" }, { status: 401 });
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { success: false, data: null, error: "Admin data access is not configured" },
        { status: 500 },
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from("form_submissions")
      .select("id, name, email, phone, service, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      // If the table does not exist, return an empty list but keep the endpoint functioning
      const tableMissing = typeof error === "object" && (error as any)?.code === "42P01";
      if (!tableMissing) {
        console.error("/api/admin/forms error:", error);
        return NextResponse.json(
          { success: false, data: null, error: "Failed to fetch form submissions" },
          { status: 500 },
        );
      }
    }

    const submissions = data ?? [];

    return NextResponse.json({
      success: true,
      data: {
        submissions,
        totalSubmissions: submissions.length,
      },
      error: null,
    });
  } catch (error: any) {
    console.error("/api/admin/forms unexpected error:", error);
    return NextResponse.json(
      { success: false, data: null, error: error?.message ?? "Internal server error" },
      { status: 500 },
    );
  }
}
