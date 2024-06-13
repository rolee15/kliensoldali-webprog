import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "../../state/users/usersSlice";
import { Button } from "@mui/material";

export const AuthStatus = () => {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  if (!user) {
    return <p>You are not logged in</p>;
  }

  return (
    <p>
      Welcome {user.fullname}
      <Button variant="contained" onClick={() => dispatch(logout())}>
        Sign out
      </Button>
    </p>
  );
};
