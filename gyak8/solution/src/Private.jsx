import { Button } from "@mui/material";
import "./Private.css";
import styles from "./Private.module.css";

function Private({ username, logout }) {
  return (
    <div>
      <h1>Szia, {username}!</h1>
      <div className={styles.keretes}>Formázott tartalom</div>
      <Button variant="standard" className="logoutBtn" onClick={logout}>
        Kijelentkezés
      </Button>
    </div>
  );
}

export default Private;
