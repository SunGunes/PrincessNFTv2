import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";

const Layout = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>

      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
