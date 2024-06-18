import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state/users/usersSlice";
import { useGetJobsByUserIdQuery } from "../../state/jobs/jobsApiSlice";
import { useEffect, useState } from "react";
import { MyJobCard } from "../jobs/MyJobCard";
import { useNavigate } from "react-router-dom";

export const CompanyProfile = () => {
  const user = useSelector(selectCurrentUser);
  const [jobs, setJobs] = useState([]);
  const { data, isLoading, error } = useGetJobsByUserIdQuery(user.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setJobs(data.data);
    }
  }, [data]);

  const handleAddJob = () => {
    navigate("/create-job");
  };

  return (
    <div>
      <div className="flex flex-col place-content-end justify-between px-4 sm:px-0">
        <div className="flex flex-col justify-start text-left">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            A te hirdetéseid:
          </h3>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul role="list" className="divide-y divide-gray-100">
            {jobs.map((job) => (
              <li key={job.id} className="flex justify-between gap-x-6 py-5">
                <MyJobCard key={job.id} job={job} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        className="rounded bg-indigo-500 px-4 py-2 font-bold text-white hover:bg-indigo-700"
        onClick={handleAddJob}
      >
        Hirdetés hozzáadása
      </button>
    </div>
  );
};
