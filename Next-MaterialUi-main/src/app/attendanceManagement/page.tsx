

import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Attendence page</h1>
    </div>
  )
}

export default page


// 'use client';
// //npm install @mui/material date-fns chart.js react-chartjs-2

// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TextField,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   Paper,
//   FormControlLabel,
//   Switch,
// } from '@mui/material';
// import { useDarkModeStore } from '../store'; // Adjust the import path as needed
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface AttendanceEntry {
//   date: string;
//   status: string;
//   loginTime: string;
//   logoutTime: string;
//   halfDay?: boolean;
// }  

// export default function AttendanceManagement() {
//   const { darkMode } = useDarkModeStore();
//   const [attendanceData, setAttendanceData] = useState<AttendanceEntry[]>([]);
//   const [newEntry, setNewEntry] = useState<AttendanceEntry>({ date: '', status: '', loginTime: '', logoutTime: '', halfDay: false });
//   const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toISOString().slice(0, 7));

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: unknown }>, field: keyof AttendanceEntry) => {
//     setNewEntry({ ...newEntry, [field]: event.target.value as string });
//   };

//   const handleSubmit = () => {
//     setAttendanceData([...attendanceData, newEntry]);
//     setNewEntry({ date: '', status: '', loginTime: '', logoutTime: '', halfDay: false });
//   };

//   const filteredData = attendanceData.filter(entry => entry.date.startsWith(selectedMonth));

//   const data = {
//     labels: filteredData.map(entry => entry.date),
//     datasets: [
//       {
//         label: 'Present',
//         data: filteredData.map(entry => (entry.status === 'Present' ? 1 : 0)),
//         backgroundColor: 'rgba(75,192,192,0.6)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Absent',
//         data: filteredData.map(entry => (entry.status === 'Absent' ? 1 : 0)),
//         backgroundColor: 'rgba(255,99,132,0.6)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Half Day (Morning)',
//         data: filteredData.map(entry => (entry.halfDay && entry.logoutTime <= '12:00' ? 0.5 : 0)),
//         backgroundColor: 'rgba(255,205,86,0.6)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Half Day (Afternoon)',
//         data: filteredData.map(entry => (entry.halfDay && entry.logoutTime > '12:00' ? 0.5 : 0)),
//         backgroundColor: 'rgba(153,102,255,0.6)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Monthly Attendance Overview',
//       },
//       tooltip: {
//         callbacks: {
//           label: function(context: any) {
//             const entry = filteredData[context.dataIndex];
//             return `${context.dataset.label}: ${entry.status}, Login: ${entry.loginTime}, Logout: ${entry.logoutTime}`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           stepSize: 1,
//         },
//       },
//     },
//   };

//   return (
//     <Container>
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Attendance Management
//         </Typography>
//         <Paper elevation={3} sx={{ padding: 2, mb: 4 }}>
//           <Typography variant="h6" component="h2" gutterBottom>
//             Enter Attendance
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField
//               type="date"
//               label="Date"
//               value={newEntry.date}
//               onChange={(e) => handleChange(e, 'date')}
//               InputLabelProps={{ shrink: true }}
//               size="small"
//             />
//             <FormControl size="small">
//               <InputLabel>Status</InputLabel>
//               <Select
//                 value={newEntry.status}
//                 onChange={(e:any) => handleChange(e, 'status')}
//                 label="Status"
//               >
//                 <MenuItem value="Present">Present</MenuItem>
//                 <MenuItem value="Absent">Absent</MenuItem>
//                 <MenuItem value="Half Day">Half Day</MenuItem>
//               </Select>
//             </FormControl>
//             <TextField
//               type="time"
//               label="Login Time"
//               value={newEntry.loginTime}
//               onChange={(e) => handleChange(e, 'loginTime')}
//               InputLabelProps={{ shrink: true }}
//               size="small"
//             />
//             <TextField
//               type="time"
//               label="Logout Time"
//               value={newEntry.logoutTime}
//               onChange={(e) => handleChange(e, 'logoutTime')}
//               InputLabelProps={{ shrink: true }}
//               size="small"
//             />
//             <FormControlLabel
//               control={<Switch checked={newEntry.halfDay} onChange={(e) => setNewEntry({ ...newEntry, halfDay: e.target.checked })} />}
//               label="Half Day"
//             />
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </Box>
//         </Paper>
//         <Paper elevation={3} sx={{ padding: 2, mb: 4 }}>
//           <Typography variant="h6" component="h2" gutterBottom>
//             Attendance Records
//           </Typography>
//           <TextField
//             type="month"
//             label="Select Month"
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//             InputLabelProps={{ shrink: true }}
//             size="small"
//             sx={{ mb: 2 }}
//           />
//           <Table size="small">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Login Time</TableCell>
//                 <TableCell>Logout Time</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredData.map((entry, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{entry.date}</TableCell>
//                   <TableCell>{entry.status}</TableCell>
//                   <TableCell>{entry.loginTime}</TableCell>
//                   <TableCell>{entry.logoutTime}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//         <Paper elevation={3} sx={{ padding: 2 }}>
//           <Typography variant="h6" component="h2" gutterBottom>
//             Attendance Overview
//           </Typography>
//           <Bar data={data} options={options} />
//         </Paper>
//       </Box>
//     </Container>
//   );
// }
