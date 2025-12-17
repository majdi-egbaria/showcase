import Link from "next/link";

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user: { id: number; name: string; email: string }) => (
          <Link href={`/users/${user.id}`} key={user.id} className="block">
            <li className="p-4 border rounded-md">
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
