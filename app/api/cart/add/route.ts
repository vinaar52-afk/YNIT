import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { createServerClient } from "@/lib/supabase";
import type { Prisma } from "@prisma/client";

type ProductType = "Tour" | "Study" | "Document" | "MedicalAesthetic";

const requestSchema = z.object({
  userId: z.string().trim().min(1, "userId is required"),
  productType: z.enum(["Tour", "Study", "Document", "MedicalAesthetic"]),
  productId: z.string().trim().min(1, "productId is required"),
  quantity: z.coerce.number().int().positive("quantity must be positive"),
  price: z.coerce.number().int().positive("price must be positive"),
});

/**
 * POST /api/cart/add
 * Body:
 *  - userId
 *  - productType (Tour, Study, Document, MedicalAesthetic)
 *  - productId
 *  - quantity
 *  - price
 */
export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization") || "";
    const accessToken = authHeader.toLowerCase().startsWith("bearer ")
      ? authHeader.slice(7).trim()
      : "";

    if (!accessToken) {
      return NextResponse.json(
        { success: false, data: null, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await request.json();

    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, data: null, error: parsed.error.errors[0]?.message ?? "Invalid request body" },
        { status: 400 },
      );
    }

    const { userId, productId, productType, quantity, price } = parsed.data;

    const supabase = createServerClient();
    const { data: authData, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !authData?.user) {
      return NextResponse.json(
        { success: false, data: null, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const prismaUser = await prisma.user.findUnique({ where: { supabaseUserId: authData.user.id } });
    if (!prismaUser) {
      return NextResponse.json(
        { success: false, data: null, error: "User not found" },
        { status: 404 },
      );
    }

    if (userId !== prismaUser.id) {
      return NextResponse.json(
        { success: false, data: null, error: "Forbidden" },
        { status: 403 },
      );
    }

    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const txAny: any = tx;
      let order = await tx.order.findFirst({
        where: {
          userId: prismaUser.id,
          status: "PendingPayment",
        },
        orderBy: { createdAt: "desc" },
      });

      if (!order) {
        order = await tx.order.create({
          data: {
            userId,
            category: "cart",
            title: "Cart",
            status: "PendingPayment",
          },
        });
      }

      const existingItem = await txAny.orderItem.findUnique({
        where: {
          orderId_productType_productId: {
            orderId: order.id,
            productType,
            productId,
          },
        },
      });

      if (existingItem) {
        await txAny.orderItem.update({
          where: { id: existingItem.id },
          data: {
            quantity: existingItem.quantity + quantity,
            price,
          },
        });
      } else {
        await txAny.orderItem.create({
          data: {
            orderId: order.id,
            productType,
            productId,
            quantity,
            price,
          },
        });
      }

      const items = await txAny.orderItem.findMany({
        where: { orderId: order.id },
        orderBy: { createdAt: "asc" },
      });

      return { orderId: order.id, items };
    });

    return NextResponse.json({
      success: true,
      data: {
        orderId: result.orderId,
        items: result.items,
      },
      error: null,
    });
  } catch (error: any) {
    console.error("/api/cart/add error:", error);
    return NextResponse.json(
      { success: false, data: null, error: error?.message ?? "Internal server error" },
      { status: 500 },
    );
  }
}
