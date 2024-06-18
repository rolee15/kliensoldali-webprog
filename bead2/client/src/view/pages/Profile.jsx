import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../state/users/usersSlice";
import { UserProfile } from "../../components/profile/UserProfile";
import { CompanyProfile } from "../../components/profile/CompanyProfile";

export const Profile = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <>{user.role === "company" ? <CompanyProfile /> : <UserProfile /> }</>
  );
};
