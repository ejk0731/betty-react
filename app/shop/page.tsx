import Link from "next/link";

export default function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <p>
        <Link href="/shop/top">Top</Link>
      </p>
      <p>
        <Link href="/shop/outwear">Outwear</Link>
      </p>
    </>
  );
}
