import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../state/users/usersApiSlice";
import { login } from "../../state/users/usersSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [authLogin, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (username === "") {
      newErrors.username = "Felhasználónév kötelező";
    }
    if (password === "") {
      newErrors.password = "Jelszó kötelező";
    }

    setErrors(newErrors);
    if (Object.values(newErrors).length > 0) {
      return;
    }

    try {
      const result = await authLogin({
        strategy: "local",
        email: username,
        password: password,
      }).unwrap();

      dispatch(login(result));
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Failed to log in:", err);
      newErrors.authentication = "Hibás felhasználónév vagy jelszó";
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-white px-8 py-6 shadow-md"
      >
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Felhasználónév
          </label>
          <input
            id="username"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Jelszó
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            disabled={isLoading}
          >
            Bejelentkezés
          </button>
        </div>
        {errors.authentication && (
          <p className="mt-4 text-red-500">{errors.authentication}</p>
        )}
      </form>
    </div>
  );
};
