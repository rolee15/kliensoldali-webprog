import { useNavigate } from "react-router-dom";
import { useDeleteJobMutation } from "../../state/jobs/jobsApiSlice";

export const MyJobCard = ({ job }) => {
  const navigate = useNavigate();
  const [deleteJob] = useDeleteJobMutation();

  const handleView = () => {
    navigate(`/jobs/${job.id}`);
  };

  const handleEdit = () => {
    navigate(`/jobs/${job.id}/edit`);
  };

  const handleDelete = () => {
    // TODO: Refresh the list of jobs after deletion
    deleteJob(job.id);
  };

  return (
    <div className="flex w-full min-w-fit grid-cols-2 justify-between gap-x-4 rounded bg-white p-4 shadow-md">
      <div className="">
        <div className="justify-start text-left">
          <h3 className="mb-2 text-lg font-bold">{job.position}</h3>
        </div>
        <div className="flex items-center justify-start text-sm text-gray-500">
          <div className="mr-4">{job.type}</div>
          <div className="mr-4">{job.homeOffice ? "Remote" : "On-site"}</div>
          <div className="mr-4">{`${job.salaryFrom} - ${job.salaryTo} HUF`}</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={handleView}
        >
          Megtekintés
        </button>
        <button
          className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
          onClick={handleEdit}
        >
          Szerkesztés
        </button>
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          onClick={handleDelete}
        >
          Törlés
        </button>
      </div>
    </div>
  );
};
