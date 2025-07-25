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