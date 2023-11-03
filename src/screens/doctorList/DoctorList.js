import {
    Button,
    CardActions,
    CardContent,
    Rating,
    Typography
  } from "@mui/material";
  import React, { useState } from "react";
  import {Paper} from "@mui/material";
  import DoctorAppointment from "./BookAppointment";
  
  const DoctorList = () => {
    const [value, setValue] = React.useState(2);
    const [visible,isVisible] = useState(true)
    const openModal = ()=>{
      isVisible(true)
    }
    return (
      <div id="header">
        <Paper
          sx={{ minWidth: 275 }}
          style={{ width: "700px", marginLeft: "25%", marginTop: "14px" }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              Doctor Name: Name of the doctor
            </Typography>
  
            <Typography component="legend" display="flex">
              Speciality: Name of the functionality
            </Typography>
  
            <Typography component="legend" display="flex">
              Rating:
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Typography>
          </CardContent>
  
          <CardActions>
            <Button
              variant="contained"
              style={{ minWidth: "45%", marginLeft: "27px" }}
              onClick={openModal}
            >
              Book Appointment
            </Button>
            <Button
              variant="contained"
              color="success"
              style={{ minWidth: "45%" }}
            >
              View Details
            </Button>{" "}
          </CardActions>
        </Paper>
        {isVisible===true && <DoctorAppointment/>}
        
        
      </div>
    );
  };
  
  export default DoctorList;
  