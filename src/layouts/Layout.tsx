// src/layouts/Layout.tsx
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const showSlider = location.pathname === '/';

  return (
    <>
      <Header showSlider={showSlider} />
      <Outlet />
    </>
  );
};

export default Layout;
