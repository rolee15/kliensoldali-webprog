import { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";

function Login({ login }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const newErrors = {};

    if (username === "") {
      newErrors.username = "Username is required";
    }

    if (password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    if (Object.values(newErrors).length > 0) {
      return;
    }

    login(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        inputRef={usernameRef}
        type="text"
        id="username"
        name="username"
        label="Felhasználónév"
        variant="standard"
        autoFocus
        error={errors.username !== undefined}
        helperText={errors.username}
      />
      <br />
      <TextField
        inputRef={passwordRef}
        type="password"
        id="password"
        name="password"
        label="Jelszó"
        variant="standard"
        error={errors.password !== undefined}
        helperText={errors.password}
      />
      <br />
      <Button variant="standard" type="submit">
        {" "}
        Elküld
      </Button>
    </form>
  );
}

export default Login;
