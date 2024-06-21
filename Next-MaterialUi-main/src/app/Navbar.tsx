
'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  InputBase,
  Switch,
  Popover,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useRouter } from 'next/navigation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderStyles.css'; // Adjust the path accordingly
import { useDarkModeStore } from './store'; // Adjust the import path as needed

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [anchorProfile, setAnchorProfile] = useState<null | HTMLElement>(null);
  const [anchorCalendar, setAnchorCalendar] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState(new Date());

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const openProfileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorProfile(event.currentTarget);
  };

  const closeProfileMenu = () => {
    setAnchorProfile(null);
  };

  const openCalendar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorCalendar(event.currentTarget);
  };

  const closeCalendar = () => {
    setAnchorCalendar(null);
  };

  const router = useRouter();
  const handler = (routerName: string) => {
    router.push(routerName);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
          onClick={()=>handler('Homepage')}>
            HRM
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'static', justifyContent: 'center', alignItems: 'center' }}>


               <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" onClick={() => handler('/Homepage')}>Home</Button>
            <Button color="inherit" onClick={() => handler('/attendanceManagement')}>Attendance</Button>
            <Button color="inherit" onClick={() => handler('/leaveManagement')}>Leaves</Button>
            <Button color="inherit" onClick={() => handler('/page3')}>Page3</Button>
            <Button color="inherit" onClick={() => handler('/page4')}>Page4</Button>
            <Button color="inherit" onClick={() => handler('/page5')}>Page5</Button>
            <Button color="inherit" onClick={() => handler('/page6')}>Page6</Button>
          </Box>




     

          </Box>

          <IconButton size="large" edge="end" color="inherit" onClick={openProfileMenu}>
            <AccountCircle />
          </IconButton>


          <Menu anchorEl={anchorProfile} open={Boolean(anchorProfile)} onClose={closeProfileMenu}>
            <MenuItem onClick={() => handler('/change-password')}>Change Password</MenuItem>
            <MenuItem onClick={() => handler('/logsign')}>Logout</MenuItem>
            <MenuItem>
              <Switch checked={darkMode} onChange={toggleDarkMode} />
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </MenuItem>
          </Menu>
          <IconButton size="large" edge="end" color="inherit" onClick={openCalendar}>
            <CalendarTodayIcon />
          </IconButton>

          <Popover
            open={Boolean(anchorCalendar)}
            anchorEl={anchorCalendar}
            onClose={closeCalendar}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Calendar
                onChange={setValue}
                value={value}
                className={darkMode ? 'dark-mode' : ''}
              />
            </Box>
          </Popover>
        </Toolbar>
        {/* <hr /> */}




        <Toolbar sx={{ justifyContent: 'center', backgroundColor: '' }}>
        <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'inherit', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 1, padding: '0 10px', marginRight: 1 }}
            /> 
          
          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton size="large" edge="start" color="inherit" onClick={openMenu}>
              <MenuIcon />
            </IconButton>
          </Box>
       
          <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MenuList >
            <Button color="inherit" onClick={() => handler('/Homepage')}>Home</Button>
              <MenuItem onClick={() => handler('/Attendance')}>Attendance</MenuItem>
              <MenuItem onClick={() => handler('/leaveManagement')}>Leaves</MenuItem>
              <MenuItem onClick={() => handler('/page3')}>Page3</MenuItem>
              <MenuItem onClick={() => handler('/page4')}>Pagecvvbvcbv4</MenuItem>
              <MenuItem onClick={() => handler('/page5')}>Page5</MenuItem>
              <MenuItem onClick={() => handler('/page6')}>Page6</MenuItem>
            </MenuList>
          </Menu>
        </Toolbar>
      </AppBar>
      
    </>
  );
}


