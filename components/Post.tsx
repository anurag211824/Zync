import React from "react";
import ImageComp from "./ImageComp";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";

export default function Post() {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 ">
        icon
        <span>Saurabh reposted</span>
      </div>
      <div className="flex gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <ImageComp
            src="/general/avatar.png"
            alt="Saurabh"
            w={100}
            h={100}
            //   tr={true}
          />
        </div>
        {/* content */}
        <div className="flex-1 flex-col gap-2">
          {/* top */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">saurabh</h1>
              <span className="text-textGray">@saurabhkr</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* text-media */}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            assumenda aut reiciendis voluptate maxime qui? Quod ipsa est aperiam
            a!klsdjv ijdsjncvxzjk
          </p>
          <ImageComp src="general/post.jpeg" alt="post" w={600} h={600}/>
        <PostInteractions/>
        </div>
      </div>
    </div>
  );
}
