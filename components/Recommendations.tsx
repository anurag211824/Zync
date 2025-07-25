import Link from "next/link";
import Image from "next/image";

export default function Recommendations() {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">

      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <Image src="/general/avatar.png" alt="John Doe" width={100} height={100} />
          </div>
          <div className=''>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <Image src="/general/avatar.png" alt="John Doe" width={100} height={100}/>
          </div>
          <div className=''>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-2'>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <Image src="/general/avatar.png" alt="John Doe" width={100} height={100}/>
          </div>
          <div className=''>
            <h1 className="text-md font-bold">John Doe</h1>
            <span className="text-textGray text-sm">@johnDoe</span>
          </div>
        </div>

        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};
