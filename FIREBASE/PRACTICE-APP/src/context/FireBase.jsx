import { createContext } from "react";

const FireBaseContext = createContext(null);

export const FireBaseProvider = (props) => {
  return <FireBaseContext.Provider>{props.children}</FireBaseContext.Provider>;
};
