import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../state/users/usersApiSlice";
import { usePostExperienceMutation } from "../../state/experiences/experiencesApiSlice";
import { login } from "../../state/users/usersSlice";
import { useDispatch } from "react-redux";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [role, setRole] = useState("jobseeker");
  const [experience, setExperience] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();
  const [loginApi] = useLoginMutation();
  const [postExperience] = usePostExperienceMutation();
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    let experiences = [];
    if (email === "") {
      newErrors.email = "Felhasználónév kötelező";
    }
    if (fullname === "") {
      newErrors.fullname = "Teljes név kötelező";
    }
    if (password === "") {
      newErrors.password = "Jelszó kötelező";
    }
    if (confirmPassword === "") {
      newErrors.confirmPassword = "Jelszó megerősítése kötelező";
    }
    if (password !== confirmPassword) {
      newErrors.password = "Jelszavak nem egyeznek";
    }

    if (role === "jobseeker" && experience.length !== 0) {
      const invalidExperiences = experience
        .replace(/^\s+|\s+$/g, "")
        .split("\n")
        .filter((exp) => {
          const [company, title, interval] = exp.split(";");
          return company === "" || title === "" || interval === "";
        });
      if (invalidExperiences.length > 0) {
        console.log(invalidExperiences);
        newErrors.experience = "Munkatapasztalatok formátuma nem megfelelő";
      } else {
        experiences = experience
          .replace(/^\s+|\s+$/g, "")
          .split("\n")
          .map((exp) => {
            const [company, title, interval] = exp.split(";");
            return { company, title, interval };
          });
      }
    }

    setErrors(newErrors);
    if (Object.values(newErrors).length > 0) {
      return;
    }

    try {
      await register({
        email,
        password,
        fullname,
        role,
      }).unwrap();

      try {
        // login to get token for sending job experiences
        const loginResult = await loginApi({
          strategy: "local",
          email,
          password,
        }).unwrap();
        dispatch(login(loginResult));
      } catch (error) {
        console.error("Login Error:", error);
        navigate("/login");
        return;
      }

      if (role === "jobseeker" && experiences.length > 0) {
        try {
          await postExperience(
            [...experiences]
          ).unwrap();
        } catch (error) {
          console.error("Post Experience Error:", error);
        }
      }

      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error);
      newErrors.registration = "Regisztráció sikertelen";
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-white px-8 py-6 shadow-md"
      >
        <h2 className="mb-4 text-2xl font-bold">Regisztráció</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email cím
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Teljes név
          </label>
          <input
            id="fullname"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Jelszó megerősítése
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Szerepkör
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="jobseeker">Munkavállaló</option>
            <option value="company">Munkáltató</option>
          </select>
        </div>
        {role === "jobseeker" && (
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Munkatapasztalat
            </label>
            <textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.experience && (
              <div className="text-red-500">{errors.experience}</div>
            )}
          </div>
        )}
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>
        {error && (
          <div className="mt-2 text-sm text-red-500">{errors.registration}</div>
        )}
      </form>
    </div>
  );
};
