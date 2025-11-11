### CODE FOR  createAsyncThunk

- userSlice.js :

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("users/addUser", async (userData) => {
  const response = await axios.post("http://localhost:3000/users", userData);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    status: "idle",
    error: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    extraReducers: (builder) => {
      builder
        .addCase(addUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(addUser.fulfilled, (state) => {
          state.status = "succeeded";
          state.name = "";
          state.email = "";
        })
        .addCase(addUser.rejected, (state, action) => {
          state.state = "failed";
          state.error = action.error.message;
        });
    },
  },
});

export const { updateName, updateEmail } = userSlice.actions;
export default userSlice.reducer;
```

- UserForm.jsx :

```js
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
```

- store.js :

```js
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/users/userSlice";

const store = configureStore({
    reducer:{
        user:userReducer,
    },
})


export default store;

```


### RTQ QUERY :


