import Image from "next/image";
import Link from "next/link";

export default function LeftBar() {
  const menuList = [
    {
      id: 1,
      name: "Homepage",
      link: "/",
      icon: "home.svg",
    },
    {
      id: 2,
      name: "Explore",
      link: "/",
      icon: "explore.svg",
    },
    {
      id: 3,
      name: "Notification",
      link: "/",
      icon: "notification.svg",
    },
    {
      id: 4,
      name: "Messages",
      link: "/",
      icon: "message.svg",
    },
    {
      id: 5,
      name: "Bookmarks",
      link: "/",
      icon: "bookmark.svg",
    },
    {
      id: 6,
      name: "Jobs",
      link: "/",
      icon: "job.svg",
    },
    {
      id: 7,
      name: "Communities",
      link: "/",
      icon: "community.svg",
    },
    {
      id: 8,
      name: "Premium",
      link: "/",
      icon: "logo.svg",
    },
    {
      id: 9,
      name: "Profile",
      link: "/",
      icon: "profile.svg",
    },
    {
      id: 10,
      name: "More",
      link: "/",
      icon: "more.svg",
    },
  ];
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg  items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {menuList.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="p-2 rounded-full hover:bg-[#181818] flex flex-row items-center gap-4"
          >
            <Image
              src={`icons/${item.icon}`}
              alt={item.name}
              width={24}
              height={24}
            />
            <span className="max-lg:hidden">{item.name}</span>
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="bg-white text-black rounded-full w-12 flex items-center justify-center xxl:hidden"
      >
        <Image src="icons/post.svg" alt="new post" width={24} height={24} />
      </Link>
      <Link
        href="/"
        className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
      >
        Post
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            
            <Image src="/general/avatar.png"
            alt="Saurabh"
            width={100}
            height={100}/>
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Saurabh Kumar</span>
            <span className="text-sm text-textGray">@saurabhkr</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
}
