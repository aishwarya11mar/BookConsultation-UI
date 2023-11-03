import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import { Register } from "../register/Register";
import { useForm } from "react-hook-form"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "380px",

  }
};
const Login = ({
  modalIsOpen,
  onChangesAfterOpenModal,
  onChangeCloseModal,
  subtitle
}) => {

  const [value, setValue] = React.useState(0);
  // const [email, setEmail] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      Email: "",
      Password: ""
    }

  })
  const email = watch('Email')
  // const password = watch('Password')

  // console.log(email);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeValue = (event) => {
  //   setEmail(event.target.value);

  //   //console.log('value is:', event.target.value);
  // }

  // const isFormValid = () => {
  //   if (email.length > 0) {
  //     return true
  //   }
  //   console.log('false');
  //   return false
  // }
  console.log('err', errors);

  return (
    <div >

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={onChangesAfterOpenModal}
        onRequestClose={onChangeCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            backgroundColor: "purple",
            margin: '-20px',
            marginTop: '-39px'

          }}
        >
          <h2
            style={{
              color: "white",
              padding: "30px",
              fontFamily: "cursive"
            }}
          >
            Authentication
          </h2>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Login" value="1" style={{ minWidth: "50%" }} />
                  <Tab label="Register" value="2" style={{ minWidth: "50%" }} />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div
                  style={{ marginTop: "5px", width: "300px", marginLeft: "45px" }}
                >

                  <TextField {...register("Email", { required: "Enter Valid Email Id" })}
                    aria-invalid={errors.Email ? "true" : "false"} id="standard-error" type="email" label="Email*" variant="standard" />
                  {errors.Email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.Email.message}</p>}

                </div>

                <div style={{ marginTop: "5px", width: "300px", marginLeft: "45px" }}>

                  <TextField {...register("Password",  {required: "Please fill this field" })}
                    aria-invalid={errors.Password ? "true" : "false"} id="standard-error" type='password' label="Password*" variant="standard" />
                  {errors.Password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.Password.message}</p>}

                </div>

                <div style={{ marginTop: "40px", marginLeft: "50px" }}>
                  <Button
                    variant="contained"
                    type='submit'
                    style={{ alignContent: "flex-end" }}
                  >
                    Login
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <Register {...register("Email")} {...register("Password")} />
                
              </TabPanel>
            </TabContext>
          </Box>

        </form>
      </Modal>
    </div>
  );
};

export default Login;
