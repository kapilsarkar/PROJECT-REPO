import { useState } from "react";
import { useAddUserMutation } from "../features/api/apiSlice";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [addUser] = useAddUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    await addUser(formData);
    setFormData({ name: "", email: "" });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>User Form</div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default UserForm;
