<<<<<<< HEAD
//@ts-nocheck
"use client";
export default function Home() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return <div></div>;
}
=======
import {prisma} from "@/prisma"
export default async function Home() {
  const users = await prisma.user.findMany()
  console.log(users);
  
  return (
    <div>
      Resize me to see breakpoints in action!
    </div>
  );
}
>>>>>>> db422f046f95eab631c82c6e3ca95a60da5a2c16
