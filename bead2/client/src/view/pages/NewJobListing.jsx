import { useState } from "react";
import { usePostJobMutation } from "../../state/jobs/jobsApiSlice";
import { selectCurrentUser } from "../../state/users/usersSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const NewJobListing = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [type, setType] = useState("full-time");
  const [city, setCity] = useState("");
  const [homeOffice, setHomeOffice] = useState(false);

  const [postJob] = usePostJobMutation();
  const [error, setError] = useState(null);

  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form validation

    try {
      await postJob({
        company,
        position,
        description,
        salaryFrom: parseInt(salaryFrom),
        salaryTo: parseInt(salaryTo),
        type,
        city,
        homeOffice,
      });

      navigate("/profile");
    } catch (error) {
      console.error("Failed to post job listing", error);
      setError("Failed to post job listing");
    }
  };

  if (user.role !== "company") {
    return <div>You are not authorized to access this page</div>;
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-white px-8 py-6 shadow-md"
      >
        <h2 className="mb-4 text-2xl font-bold">Hirdetés hozzáadása</h2>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="company"
          >
            Cég neve
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="position"
          >
            Pozíció neve
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="description"
          >
            Leírás
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 mr-4 block text-sm font-bold text-gray-700"
            htmlFor="salary"
          >
            Fizetési sáv
          </label>
          <div className="flex w-full items-center justify-between">
            <input
              type="number"
              id="salaryFrom"
              name="salaryFrom"
              value={salaryFrom}
              onChange={(e) => setSalaryFrom(e.target.value)}
              className="mr-2 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="From"
            />
            <span className="mr-2 text-gray-500">-</span>
            <input
              type="number"
              id="salaryTo"
              name="salaryTo"
              value={salaryTo}
              onChange={(e) => setSalaryTo(e.target.value)}
              className="mr-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="To"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="type"
          >
            Foglalkoztatás formája
          </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full appearance-none rounded border bg-white px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="full-time">Teljes állás</option>
            <option value="part-time">Részmunkaidős</option>
            <option value="contract">Szerződéses</option>
            <option value="internship">Gyakornoki</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="city"
          >
            Település
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4 flex justify-center gap-x-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="homeOffice"
          >
            Otthoni munkavégzés
          </label>
          <input
            type="checkbox"
            id="homeOffice"
            name="homeOffice"
            checked={homeOffice}
            onChange={(e) => setHomeOffice(e.target.checked)}
            className="items-center"
          />
        </div>
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="submit"
        >
          Submit
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};
