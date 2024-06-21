
'use client';
import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Stack,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

// Email Validation
const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleUsername = () => {
    if (usernameInput.length < 5 || usernameInput.length > 15) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };

  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handlePassword = () => {
    if (!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = () => {
    setSuccess("");
    if (usernameError || !usernameInput || usernameInput.length < 5 || usernameInput.length > 15) {
      setFormValid("Username must be between 5 - 15 characters long. Please re-enter.");
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please re-enter.");
      return;
    }

    if (passwordError || !passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
      setFormValid("Password must be between 5 - 20 characters long. Please re-enter.");
      return;
    }

    setFormValid("");
    console.log("Username:", usernameInput);
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Form Submitted Successfully");
  };

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <TextField
          error={usernameError}
          label="Username"
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          onBlur={handleUsername}
        />
      </div>

      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Email Address"
          fullWidth
          error={emailError}
          variant="standard"
          sx={{ width: "100%" }}
          value={emailInput}
          size="small"
          onBlur={handleEmail}
          onChange={(event) => setEmailInput(event.target.value)}
        />
      </div>
      
      <div style={{ marginTop: "5px" }}>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            error={passwordError}
            onBlur={handlePassword}
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LoginIcon />}
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </div>

      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error" >{formValid}</Alert>
        </Stack>
      )}

      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" >{success}</Alert>
        </Stack>
      )}

      {/* <div style={{ marginTop: "7px", fontSize: "10px" }}>
        <a href="#">Forgot Password</a>
        <br />
        Do you have an account?{" "}
        <small style={{ textDecoration: "underline", color: "blue" }}>
          Sign Up
        </small>
      </div> */}
    </div>
  );
}
