import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state/users/usersSlice";
import { useEffect, useState } from "react";
import {
  useDeleteAllExperiencesMutation,
  useDeleteExperienceMutation,
  useGetExperiencesQuery,
} from "../../state/experiences/experiencesApiSlice";
import { usePostExperienceMutation } from "../../state/experiences/experiencesApiSlice";

export const PastExperiences = ({ isEditing, setIsEditing }) => {
  const { data, isLoading } = useGetExperiencesQuery();
  const [postExperience] = usePostExperienceMutation();
  const [deleteExperience] = useDeleteExperienceMutation();
  const [deleteAllExperiences] = useDeleteAllExperiencesMutation();

  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState({});

  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (data) {
      setExperience(
        data.data
          .map((exp) => `${exp.company};${exp.title};${exp.interval}`)
          .join("\n"),
      );
    }
  }, [data]);

  const saveExperiences = async () => {
    const invalidExperiences = experience
      .replace(/^\s+|\s+$/g, "")
      .split("\n")
      .filter((exp) => {
        const [company, title, interval] = exp.split(";");
        return company === "" || title === "" || interval === "";
      });
    if (invalidExperiences.length > 0) {
      console.log(invalidExperiences);
      errors.experience = "Munkatapasztalatok formátuma nem megfelelő";
      setErrors(errors);
    } else {
      // Override the previous experiences with the new ones
      const newExperiences = experience
        .replace(/^\s+|\s+$/g, "")
        .split("\n")
        .map((exp) => {
          const [company, title, interval] = exp.split(";");
          return { company, title, interval };
        });

      try {
        // delete all previous experiences where the user id is the same
        const ids = data.data
          .filter((exp) => exp.userId === user.id)
          .map((exp) => exp.id);

        ids.length > 0
          ? await Promise.all(ids.map((id) => deleteExperience(id).unwrap()))
          : await deleteAllExperiences().unwrap();

        await postExperience([...newExperiences]).unwrap();
      } catch (error) {
        console.error("Post Experience Error:", error);
      }
    }
    setIsEditing(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isEditing) {
    return (
      <div>
        <textarea
          className="h-32 w-full rounded border border-gray-300 p-2"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        ></textarea>
        <button
          onClick={saveExperiences}
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Mentés
        </button>
        {errors.experience && (
          <div className="text-red-500">{errors.experience}</div>
        )}
      </div>
    );
  }

  return (
    <>
      {data &&
        data.data.map((experience, idx) => (
          <div
            key={experience.id}
            className={`px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ${idx % 2 == 0 ? "bg-gray-50" : ""}`}
          >
            <dt className="text-sm font-medium leading-6 text-gray-900">
              {experience.company}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {experience.interval} {experience.title}
            </dd>
          </div>
        ))}
    </>
  );
};
