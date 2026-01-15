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

    // Payments are tied to orders; fetch orders that have payment_id or non-pending status
    const { data, error } = await supabase
      .from("orders")
      .select("id, user_id, status, total_amount, payment_id, created_at, updated_at")
      .or("payment_id.not.is.null,status.eq.paid,status.eq.completed,status.eq.cancelled")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("/api/admin/payments error:", error);
      return NextResponse.json(
        { success: false, data: null, error: "Failed to fetch payments" },
        { status: 500 },
      );
    }

    const summary = (data || []).reduce(
      (acc, payment: any) => {
        acc.totalPayments += 1;
        acc.totalAmount += Number(payment.total_amount ?? 0);
        acc.statusCounts[payment.status] = (acc.statusCounts[payment.status] || 0) + 1;
        if (payment.payment_id) acc.withPaymentId += 1;
        return acc;
      },
      {
        totalPayments: 0,
        totalAmount: 0,
        withPaymentId: 0,
        statusCounts: {} as Record<string, number>,
      },
    );

    return NextResponse.json({ success: true, data: { payments: data ?? [], summary }, error: null });
  } catch (error: any) {
    console.error("/api/admin/payments unexpected error:", error);
    return NextResponse.json(
      { success: false, data: null, error: error?.message ?? "Internal server error" },
      { status: 500 },
    );
  }
}
