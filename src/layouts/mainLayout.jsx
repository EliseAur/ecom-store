import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div id="main-container" className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
