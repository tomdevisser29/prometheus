import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const websites = await prisma.website.findMany();

  return NextResponse.json({
    websites,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.url) {
    return NextResponse.json({
      status: 400,
      message: "Missing field 'url'.",
    });
  }

  if (!body.providerId) {
    return NextResponse.json({
      status: 400,
      message: "Missing field 'providerId'.",
    });
  }

  const provider = await prisma.provider.findUnique({
    where: {
      id: body.providerId,
    },
  });

  if (!provider) {
    return NextResponse.json({
      status: 400,
      message: `No provider found that matches given 'providerId' ${body.providerId}.`,
    });
  }

  const websiteData = {
    url: body.url,
    providerId: body.providerId,
  };

  const website = await prisma.website.create({ data: websiteData });

  return NextResponse.json({
    status: 201,
    message: `Created website with ID ${website.id}`,
  });
}
