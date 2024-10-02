import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> TEST 123  </h1>
      <br />
      <Link href="/posts">POSTS</Link>
      <br />
      <Link href="/album">ALBUM</Link>
      </>
  );
}
