import { useGetJobByIdQuery } from "../../state/jobs/jobsApiSlice";
import { useParams } from "react-router-dom";

export const JobListing = () => {
  const { id } = useParams();

  const { data: jobItem, isLoading, error } = useGetJobByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        <h3>{jobItem.company}</h3>
        {jobItem.homeOffice && <span>Home office</span>}
        <span>
          {jobItem.salaryFrom}-{jobItem.salaryTo} Ft
        </span>
        <span>{jobItem.type}</span>
      </div>

      <div>
        <h4>Cég részletei</h4>
        <p>Megtetszett a lehetőség? Jelentkezz!</p>
        <table>
          <tr>
            <td>Név</td>
            <td>{jobItem.company}</td>
          </tr>
          <tr>
            <td>Pozíció</td>
            <td>{jobItem.position}</td>
          </tr>
          <tr>
            <td>Leírás</td>
            <td>{jobItem.description}</td>
          </tr>
          <tr>
            <td>Fizetési sáv</td>
            <td>
              Bruttó {jobItem.salaryFrom}-{jobItem.salaryTo}
            </td>
          </tr>
          <tr>
            <td>Foglalkoztatás típusa</td>
            <td>{jobItem.type}</td>
          </tr>
          <tr>
            <td>Település</td>
            <td>{jobItem.city}</td>
          </tr>
          <tr>
            <td>Home office</td>
            <td>{jobItem.homeOffice ? "Van" : "Nincs"}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
