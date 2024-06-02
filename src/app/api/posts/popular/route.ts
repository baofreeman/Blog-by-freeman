import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const POST_PER_PAGE = 5;

  try {
    const views = await prisma.post.findMany({
      take: POST_PER_PAGE,
      orderBy: [
        {
          view: "desc",
        },
      ],
      include: {
        user: {
          select: { name: true },
        },
      },
    });
    return new NextResponse(JSON.stringify(views));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};
