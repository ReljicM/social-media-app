import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { signIn } from '../../store/actions/authActions'
import { showLoader } from '../../store/actions/profileActions'
import { hideLoader } from '../../store/actions/profileActions'

import { useSelector } from "react-redux";

import { Navigate } from 'react-router-dom';



export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    
    console.log(email, password)
    const sign = creds => dispatch(signIn(creds));
    
    const auth = useSelector((state) => state.firebase.auth)
    const authErr = useSelector((state) => state.auth.authError);


    if (auth.uid) return <Navigate to="/" />

    console.log(authErr)
    const handleSubmit = (e) => {
        e.preventDefault();
        sign({email, password});
    }
    

    return (
        <Box
        component="form"
        sx={{margin: '0 auto',display: 'flex',width: 600,marginTop: '50px',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
    >
        <Box sx={{margin: '0 auto',display: 'grid'}}>
            <Typography variant='h5' align='center'>
                Sign In
            </Typography>
            <TextField
            sx={{minWidth: 300}}
            required
            id="email"
            label="Email"
            defaultValue=""
            onInput={ e => setEmail(e.target.value) }
            />
            <TextField
            type="password"
            sx={{minWidth: 300}}
            required
            id="password"
            label="Password"
            defaultValue=""
            onInput={ e => setPassword(e.target.value) }
            />
            <Typography
            align='center'
            color="red"
            sx={{
            marginBottom: '10px',
            }}
            >
                {authErr}
            </Typography>
            <Button
            type="submit"
             variant="contained"
             sx={{width: 100,margin: '0 auto'}}
            align="center"
            onClick={handleSubmit}
            >
            Submit
            </Button>
        </Box>
        
        
    </Box>
    )
}
