import { useState } from "react";
import Login from "./Login";
import Private from "./Private";
import { useAuth } from "./authContext";

function App() {
  const { loggedInUser, login, logout } = useAuth();

  return (
    <div>
      {loggedInUser === null ? (
        <Login login={login} />
      ) : (
        <Private username={loggedInUser} logout={logout} />
      )}
    </div>
  );
}

export default App;
