import React from "react";
import ImageComp from "./ImageComp";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

export default async function Post() {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };
  const fileDeatils = await getFileDetails("887441c5c7cd75eb829b7c4");
  console.log(fileDeatils);
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 ">
        <svg
          className="fill-textGray group-hover:fill-iconGreen"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" />
        </svg>
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
          {/* <ImageComp src="general/post.jpeg" alt="post" w={600} h={600} /> */}
          {fileDeatils && (
            <ImageComp
              src={fileDeatils.filePath}
              alt=""
              w={fileDeatils.width}
              h={fileDeatils.height}
              className={fileDeatils.customMetadata?.sensitive? "blur-lg" : ""}
            />
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
}
