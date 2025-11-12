import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-trueGray-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
