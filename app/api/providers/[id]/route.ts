import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const provider = await prisma.provider.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!provider) {
    return NextResponse.json({
      status: 404,
      data: null,
      message: `No provider found with ID ${id}.`,
    });
  }

  return NextResponse.json({
    status: 200,
    data: provider,
  });
}
