### STORE APP

- Simple Login/Logout Functionality using Front-End(React-Js,Context-api,ReduxToolKit) Backend(FireBase)

- User can Sign-Up using Name,E-Mail,Password and also Google Sign-Up Feature implemented using FireBase .

- User Can Get their name,email after Login.

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```