import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const website = await prisma.website.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!website) {
    return NextResponse.json(
      {
        data: null,
        message: `No website found with ID ${id}.`,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      data: website,
    },
    {
      status: 200,
    }
  );
}
