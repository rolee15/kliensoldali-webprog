import { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../state/auth/authApiSlice";
import { login } from "../../state/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errors, setErrors] = useState({});

  const [authLogin] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

    try {
      const result = await authLogin({
        strategy: "local",
        email: username,
        password: password,
      }).unwrap();

      dispatch(login(result));
      navigate("/", { replace: true });
    } catch (error) {
      newErrors.username = "Login error";
      setErrors(newErrors);
    }
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
};
