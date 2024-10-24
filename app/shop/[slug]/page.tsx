export default function Category({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1>Shop</h1>
      <p>{params.slug}</p>
    </>
  );
}
