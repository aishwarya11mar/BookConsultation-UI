import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    console.log('reg',errors);
  return (
    <form 
    onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <Box>
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
            </Box>
    </form>
  )
}
