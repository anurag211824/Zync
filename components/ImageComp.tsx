"use client";

import { Image } from "@imagekit/next";

type ImageType = {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

export default function ImageComp({
  src,
  w,
  h,
  alt,
  className,
  tr,
}: ImageType) {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  return (
    <Image
      // urlEndpoint="https://ik.imagekit.io/82hk51yot"
      urlEndpoint={urlEndpoint}
      src={src}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      // width={w}
      // height={h}

      alt={alt}
      className={className}
    />
  );
}
