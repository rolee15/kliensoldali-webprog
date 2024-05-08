import { AuthStatus } from "../auth/AuthStatus";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <div>
    <h1>GraphiLogics</h1>
    <AuthStatus></AuthStatus>
    <Outlet></Outlet>
  </div>
);
