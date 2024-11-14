import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

function MainLayout() {
  // const [count, setCount] = useState(0);

  return (
    <div id="main-container" className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
