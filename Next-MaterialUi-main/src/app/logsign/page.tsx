'use client';
import React from 'react';

import Paper from '@mui/material/Paper';
import { Chip, Switch } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face'
import LockIcon from '@mui/icons-material/Lock'

import SignUp from './SignUp';
import Login from './Login';




const LogSign = () => {
  
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
     
    <div className='App'>

<Paper elevation={8}  style={{padding:"10px"}}>

  {checked?(
<Chip icon={<FaceIcon />}  label ="Sign up"
color='primary' variant='outlined'/>

  ):(
<Chip icon={<LockIcon />}  label ="Log in"
color='primary' variant='outlined'/>
)}
<br/>

<Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>

<br/>
{checked?(<SignUp/>):(<Login/>)}
</Paper>

    </div>
    </div>
  )
}

export default LogSign