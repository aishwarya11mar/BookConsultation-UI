import { Box, FormControl, MenuItem, Select, Tab, Typography } from "@mui/material";
  import React from "react";
  import {TabContext} from "@mui/lab";
  import {TabList} from "@mui/lab";
  import {TabPanel} from "@mui/lab";
  import Header from "./../../common/header/Header";
  import DoctorList from "./../doctorList/DoctorList";
  const Home = () => {
    const [value, setValue] = React.useState("1");
    const [speciality, setSpeciality] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
  
    const OnhandleChange = (event) => {
      setSpeciality(event.target.value);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        
  
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} centered>
                <Tab
                  label="Doctors"
                  value="1"
                  padding="100px"
                  style={{ minWidth: "50%" }}
                />
                <Tab label="Apointment" value="2" style={{ minWidth: "50%" }} />
              </TabList>
            </Box>
            <TabPanel value="1">
              <FormControl
                variant="filled"
                sx={{ m: 1, minWidth: 120 }}
                style={{ marginLeft: "40%", width: "200px" }}
              >
                <Typography>Select Speciality</Typography>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={speciality}
                  onChange={OnhandleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Dental</MenuItem>
                  <MenuItem value={20}>General Physician</MenuItem>
                  <MenuItem value={30}>Pulmonologist</MenuItem>
                </Select>
              </FormControl>
              <DoctorList />
              <DoctorList />
            </TabPanel>
            <TabPanel value="2">Login to see Apointments</TabPanel>
          </TabContext>
        </Box>
    );
  };
  
  export default Home;
  