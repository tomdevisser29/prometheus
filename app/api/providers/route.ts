import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const providers = await prisma.provider.findMany();

  return NextResponse.json({
    providers,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      {
        message: "Missing field 'name'.",
      },
      {
        status: 400,
      }
    );
  }

  const providerData = {
    name: body.name,
  };

  const provider = await prisma.provider.create({ data: providerData });

  return NextResponse.json(
    {
      message: `Created provider with ID ${provider.id}`,
    },
    {
      status: 201,
    }
  );
}
