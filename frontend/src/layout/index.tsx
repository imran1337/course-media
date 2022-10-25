import { Outlet } from 'react-router-dom';
import NavBar from '~/layout/NavBar';

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
