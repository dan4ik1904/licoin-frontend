import {  Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";

function Layout() {
  return (
    <>
    <div className="mobile">
      <div className="mobile__top">
        <Header />
      </div>
      <div className="mobile__content">
        <Outlet />
      </div>
      <Nav />
    </div>
      
    </>
  );
}

export default Layout;
