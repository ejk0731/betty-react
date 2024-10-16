import Link from "next/link";
import Header from "@/components/header";

console.log("happy coding");
export default function Home() {
  return (
    <div>
      <main>
        <Header />
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
