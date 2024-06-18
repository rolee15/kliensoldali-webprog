import { useEffect, useState } from "react";
import { useGetAllJobsWithLimitAndSkipQuery } from "../../state/jobs/jobsApiSlice";
import { JobCard } from "../../components/jobs/JobCard";

export const JobListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [jobs, setJobs] = useState([]);
  const { data, error, isLoading } = useGetAllJobsWithLimitAndSkipQuery({
    limit,
    skip: (currentPage - 1) * limit,
  });

  useEffect(() => {
    if (data) {
      setJobs(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (jobs === null) {
    return <div>No jobs found</div>;
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {jobs.map((job) => (
        <li key={job.id} className="flex justify-between gap-x-6 py-5">
          <JobCard key={job.id} job={job} />
        </li>
      ))}
    </ul>
  );
};
