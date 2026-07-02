import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Header />

      <main className="pt-18">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;