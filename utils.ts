import ImageKit from "imagekit";

export const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
// NEXT_PUBLIC_PUBLIC_KEY=public_AqPe4E6D8Kke1M174gO6Soxwxgk=
// NEXT_PUBLIC_URL_ENDPOINT=https://ik.imagekit.io/82hk51yot
// PRIVATE_KEY=private_ERLBXWbyUH7c3wBqtAPgKXS2Nv0=