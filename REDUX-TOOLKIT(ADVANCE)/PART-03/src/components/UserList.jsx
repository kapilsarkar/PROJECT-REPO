import { useGetUsersQuery } from "../features/api/apiSlice";

const UserList = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <>
      <div className="mt-2 p-3">
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}-{user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
