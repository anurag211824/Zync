import Image from "@/components/Image";
import { prisma } from "@/prisma";
// import { Image } from "@imagekit/next";

export default async function Home() {
  

  const users = await prisma.user.findMany();
  console.log(users);

  return (
  <div>
    <Image
      // urlEndpoint="https://ik.imagekit.io/82hk51yot"
      src="/general/post.jpeg"
      w={620}
      h={500}
      alt="Picture of the author"
    />
  </div>
  );
}
