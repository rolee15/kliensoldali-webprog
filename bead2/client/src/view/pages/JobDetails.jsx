import { useEffect, useState } from "react";
import {
  useGetApplicationsByJobIdQuery,
  usePostApplicationMutation,
} from "../../state/applicants/applicantsApiSlice";
import { useGetJobByIdQuery } from "../../state/jobs/jobsApiSlice";
import { selectCurrentUser } from "../../state/users/usersSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const JobDetails = () => {
  const { id } = useParams();
  const { data: jobItem, isLoading, error } = useGetJobByIdQuery(id);
  const { data: applicants } = useGetApplicationsByJobIdQuery(id);
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);

  const user = useSelector(selectCurrentUser);
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [postApplication] = usePostApplicationMutation();

  useEffect(() => {
    console.log(applicants, user);
    if (applicants) {
      setAlreadyApplied(
        applicants.some((applicant) => applicant.userId === user.id),
      );
    }
  }, [applicants, user]);

  const handleClick = () => {
    try {
      const jobId = parseInt(id);
      postApplication({ jobId }).unwrap();
      setAlreadyApplied(true);
      setSuccess("Sikeres jelentkezés!");
    } catch (error) {
      console.error(error);
      const newErrors = {};
      newErrors.applicants =
        "Hiba történt a jelentkezés során. Kérjük próbálja újra később.";
      setErrors(newErrors);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex place-content-end justify-between px-4 sm:px-0">
        <div className="flex flex-col justify-start text-left">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Cég részletei
          </h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">
            Megtetszett a lehetőség? Jelentkezz!
          </p>
        </div>
        {alreadyApplied ?
          <button
            disabled
            className="h-11 w-48 self-end rounded bg-gray-400 px-4 py-2 font-bold text-white"
          >
            Már jelentkeztél
          </button>
         : (
          <button
            onClick={handleClick}
            className="h-11 w-32 self-end rounded bg-indigo-700 px-4 py-2 font-bold text-white hover:bg-indigo-900"
          >
            Jelentkezés
          </button>
        )}
      </div>
      {success && <div className="text-green-500">{success}</div>}
      {errors && <div className="text-red-500">{errors.applicants}</div>}
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Név</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {jobItem.company}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Pozíció
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {jobItem.position}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Leírás
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {jobItem.description}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Fizetési sáv
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Bruttó {jobItem.salaryFrom}-{jobItem.salaryTo} HUF
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Foglalkoztatás típusa
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {jobItem.type}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Település
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {jobItem.city}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Home office
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {jobItem.homeOffice ? "Van" : "Nincs"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
