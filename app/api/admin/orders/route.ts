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
      .from("orders")
      .select("id, user_id, status, total_amount, payment_id, created_at, updated_at, order_items(*)")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("/api/admin/orders error:", error);
      return NextResponse.json(
        { success: false, data: null, error: "Failed to fetch orders" },
        { status: 500 },
      );
    }

    const summary = (data || []).reduce(
      (acc, order: any) => {
        acc.totalOrders += 1;
        acc.totalAmount += Number(order.total_amount ?? 0);
        acc.statusCounts[order.status] = (acc.statusCounts[order.status] || 0) + 1;
        return acc;
      },
      {
        totalOrders: 0,
        totalAmount: 0,
        statusCounts: {} as Record<string, number>,
      },
    );

    return NextResponse.json({ success: true, data: { orders: data ?? [], summary }, error: null });
  } catch (error: any) {
    console.error("/api/admin/orders unexpected error:", error);
    return NextResponse.json(
      { success: false, data: null, error: error?.message ?? "Internal server error" },
      { status: 500 },
    );
  }
}
