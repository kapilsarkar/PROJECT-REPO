import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slices/users/userSlice";

const UserComponent = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="w-full">
        <h2 className="text-center font-bold">User List</h2>
        <ul className="text-black font-bold">
          {users.map((user) => {
            return (
              <li key={user.id}>
                Name : {user.name} - E-Mail{user.email}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UserComponent;
