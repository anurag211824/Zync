import Link from "next/link";
import Image from "next/image";

export default function Popular() {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>

      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            src="/general/post.jpeg"
            alt="event"
            width={120}
            height={120}    />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};
