import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const websites = await prisma.website.findMany();

  return NextResponse.json({
    websites,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.url) {
    return NextResponse.json(
      {
        message: "Missing field 'url'.",
      },
      {
        status: 400,
      }
    );
  }

  if (!body.providerId) {
    return NextResponse.json(
      {
        message: "Missing field 'providerId'.",
      },
      {
        status: 400,
      }
    );
  }

  const provider = await prisma.provider.findUnique({
    where: {
      id: body.providerId,
    },
  });

  if (!provider) {
    return NextResponse.json(
      {
        message: `No provider found that matches given 'providerId' ${body.providerId}.`,
      },
      {
        status: 400,
      }
    );
  }

  const websiteData = {
    url: body.url,
    providerId: body.providerId,
  };

  const website = await prisma.website.create({ data: websiteData });

  return NextResponse.json(
    {
      message: `Created website with ID ${website.id}`,
    },
    {
      status: 201,
    }
  );
}
