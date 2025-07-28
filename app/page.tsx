import Feed from "@/components/Feed";
import ImageComp from "@/components/ImageComp";
import Image from "@/components/ImageComp";
import Share from "@/components/Share";
import { prisma } from "@/prisma";
import Link from "next/link";
// import { Image } from "@imagekit/next";

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div>
      <div className="flex px-4 pt-4 justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For You
        </Link>
        <Link href="/" className="pb-3 flex items-center border-b-4 ">
          Following
        </Link>
        <Link href="/" className="pb-3 flex items-center md:hidden border-b-4 ">
          React.js
        </Link>
        <Link href="/" className="pb-3 flex items-center md:hidden border-b-4 ">
          Javascript
        </Link>
        <Link href="/" className="pb-3 flex items-center md:hidden border-b-4 ">
          CSS
        </Link>
      </div>
      {/* <ImageComp
        src="/general/post.jpeg"
        w={620}
        h={500}
        alt="Picture of the author"
      /> */}
      <Share />
      <Feed />
    </div>
  );
}
