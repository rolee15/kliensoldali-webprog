import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../../state/users/usersSlice";
import { Logo } from "./Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";

export const TopNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-800 p-4 text-white">
      <Logo />
      <HamburgerMenu toggleMenu={toggleMenu} />
      <div
        className={`block w-full flex-grow lg:flex lg:w-auto lg:items-center ${isOpen ? "" : "hidden"}`}
      >
        {user ? (
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="mr-4 mt-4 block lg:mt-0 lg:inline-block">
              Álláshirdetések
            </Link>
            <Link
              to="/profile"
              className="mr-4 mt-4 block hover:text-white lg:mt-0 lg:inline-block"
            >
              Profilom
            </Link>

            {user.role === "company" && (
              <Link
                to="/create-job"
                className="mr-4 mt-4 block hover:text-white lg:mt-0 lg:inline-block"
              >
                Álláshirdetés hozzáadása
              </Link>
            )}

            <Link
              to="/"
              onClick={() => {
                dispatch(logout());
              }}
              className="mr-4 mt-4 block hover:text-white lg:mt-0 lg:inline-block"
            >
              Kijelentkezés
            </Link>
          </div>
        ) : (
          <div className="text-sm lg:flex-grow">
            <Link
              to="/register"
              className="mr-4 mt-4 block hover:text-gray-400 lg:mt-0 lg:inline-block"
            >
              Regisztráció
            </Link>
            <Link
              to="/login"
              className="mr-4 mt-4 block hover:text-white lg:mt-0 lg:inline-block"
            >
              Bejelentkezés
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
