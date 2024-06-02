import { auth } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page: any = searchParams.get("page");
  const cat: any = searchParams.get("cat");
  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" })
    );
  }
};

export const POST = async (req: NextRequest) => {
  const session = await auth();
  console.log(session);
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }));
  }
  const body = await req.json();
  try {
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    });

    return new NextResponse(JSON.stringify(post));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" })
    );
  }
};
