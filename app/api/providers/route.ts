import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const providers = await prisma.provider.findMany();

  return NextResponse.json({
    providers,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({
      status: 400,
      message: "Missing field 'name'.",
    });
  }

  const providerData = {
    name: body.name,
  };

  const provider = await prisma.provider.create({ data: providerData });

  return NextResponse.json({
    status: 201,
    message: `Created provider with ID ${provider.id}`,
  });
}
