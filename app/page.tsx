import Image from "next/image";
import Link from "next/link";

console.log("happy coding");
export default function Home() {
  return (
    <div>
      <main>
        <Image src="/logo.png" alt="A server surrounded by magic sparkles." width={180} height={38} priority />
        <h1>Welcome to this NextJS Course!</h1>
        <p>🔥 Let&apos;s get started! 🔥</p>
        <p>
          {/* anchor tag - does not in a single page */}
          <a href="/about">About Us</a>
          <br />
          {/* Link tag - does work in a single page */}
          <Link href="/about">About Us</Link>
        </p>
      </main>
    </div>
  );
}
