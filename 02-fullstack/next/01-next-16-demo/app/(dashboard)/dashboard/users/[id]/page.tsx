export default async function User({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <div className="text-5xl">User {id}</div>;
}
