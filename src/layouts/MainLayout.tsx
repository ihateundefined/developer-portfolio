import { Outlet } from 'react-router-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      <Header />

      <main className="relative overflow-hidden pt-18">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_30%)]" />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
