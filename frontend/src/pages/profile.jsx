import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p className="p-6">Please login to view your profile.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
