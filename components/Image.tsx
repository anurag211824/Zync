'use client'
// import { Image } from "@imagekit/next";
import { Image } from "@imagekit/next";
type ImageType = {
  src: string;
  w: string;
  h: string;
  alt: string;
  className: string;
};
export default function Image({ src, w, h, alt, className }: ImageType) {
//   const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const urlEndpoint="https://ik.imagekit.io/82hk51yot";

  return (
    <Image
      urlEndpoint="https://ik.imagekit.io/82hk51yot"
    //   urlEndpoint={urlEndpoint}
      src={src}
      width={620}
      height={500}
      alt="Picture of the author"
    />
  );
}
