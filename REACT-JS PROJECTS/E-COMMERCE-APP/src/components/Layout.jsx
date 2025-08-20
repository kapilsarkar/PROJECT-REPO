import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white text-black bg-white">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
