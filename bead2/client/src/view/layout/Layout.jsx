import { Outlet } from "react-router-dom";
import { TopNavBar } from "../../components/navbar/TopNavBar";

export const Layout = () => {

  return (
    <>
      <TopNavBar />
      <Outlet></Outlet>
    </>
  );
};
