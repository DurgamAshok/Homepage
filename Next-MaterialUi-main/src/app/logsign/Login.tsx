// import { Visibility, VisibilityOff } from '@mui/icons-material'
// import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
// import LoginIcon from "@mui/icons-material/Login"
// import React from 'react'

// export const Login = () => {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <p>
//       <TextField id = "standard-basic"
//        label="UserName"
//       variant='standard' 
//       fullWidth
//       size ="small"
//       />
//       </p>
//       <p>
//       <FormControl sx={{  width: '100%' }} variant="standard">
//           <InputLabel
//            htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             fullWidth
//             id="standard-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>
//         </p>
//         <br/>
//         <p>
//         <Button variant="contained" endIcon={<LoginIcon/>}>
//   LOGIN
// </Button>
//         </p>
//     </div>
//   )
// }


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

export default function Login() {
 
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
   
    if (emailError || !emailInput) {
      setFormValid("Email is invalid. Please re-enter.");
      return;
    }

    if (passwordError || !passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
      setFormValid("Password must be between 5 - 20 characters long. Please re-enter.");
      return;
    }

    setFormValid("");
   
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    setSuccess("Form Submitted Successfully");
  };

  return (
    <div>
      

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

      <div style={{ marginTop: "7px", fontSize: "10px" }}>
        <a href="../forgot-password">Forgot Password</a>
        <br />
      </div>
    </div>
  );
}

