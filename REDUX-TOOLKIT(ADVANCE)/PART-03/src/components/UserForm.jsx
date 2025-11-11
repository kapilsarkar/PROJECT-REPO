import { useDispatch, useSelector } from "react-redux";
import { addUser, updateEmail, updateName } from "../features/users/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const { name, email, status } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
  };
  return (
    <>
      <div>User Form</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        {status === "loading" && <p>Submitting....</p>}
        {status === "succeeded" && <p>Submitted Successfully!</p>}
        {status === "failed" && <p>Submission Failed. Please try again.</p>}
      </form>
    </>
  );
};

export default UserForm;
