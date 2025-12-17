interface Props {
  params: Promise<{ id: string }>;
}

export default async function UsersPage({ params }: Props) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">User Details</h1>
      <div className="p-4 border rounded-md">
        <h2 className="font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}
