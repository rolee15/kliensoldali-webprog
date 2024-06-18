import { useNavigate } from "react-router-dom";

export const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="grid w-full min-w-fit grid-cols-2 gap-x-4 rounded bg-white p-4 shadow-md"
    >
      <div className="">
        <h3 className="mb-2 text-lg font-bold">{job.position}</h3>
        <p className="text-gray-500">{job.city}</p>
      </div>
      <div className="flex-col items-center justify-end">
        <p className="font-semibold">{`${job.salaryFrom} - ${job.salaryTo} HUF`}</p>
        <p className="text-sm text-gray-500">{job.type}</p>
      </div>
    </div>
  );
};
