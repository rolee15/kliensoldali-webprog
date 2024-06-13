import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../state/users/usersSlice";

export const TopNavBar = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between bg-gray-800 px-4 py-2 text-white">
      <Link to="/" className="text-xl font-bold">
        JobHunter
      </Link>
      <ul className="flex space-x-4">
        {user ? (
          <>
            <li>
              <Link to="/" className="hover:text-gray-400">
                Álláshirdetések
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-gray-400">
                Profilom
              </Link>
            </li>

            {user.role === "company" && (
              <li>
                <Link to="/create-job" className="hover:text-gray-400">
                  Álláshirdetés hozzáadása
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/"
                onClick={() => {
                  dispatch(logout());
                }}
                className="hover:text-gray-400"
              >
                Kijelentkezés
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
