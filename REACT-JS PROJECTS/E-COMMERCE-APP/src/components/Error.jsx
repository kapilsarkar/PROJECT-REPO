import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className=" w-full dark:bg-gray-900 dark:text-white text-black bg-white">
      <h2 className=" font-bold p-2 mt-2">Ops...SomeThing Went Wrong.😒</h2>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
