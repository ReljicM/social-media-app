import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFirestore } from "react-redux-firebase";
import { signUpUser } from '../../store/actions/authActions';

export default function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.firebase.auth)
    const authErr = useSelector((state) => state.auth.authError);
    console.log(authErr)
    console.log(firstName, lastName, email, password)
    const firestore = useFirestore();
    const createUser = newUser => dispatch(signUpUser({firestore}, newUser ))
        
    ;

    if (auth.uid) return <Navigate to="/" />

    const handleSubmit = (e) => {
        e.preventDefault();
            createUser({
                firstName,
                lastName,
                email,
                password,
                rePassword
            })
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
                    Sign Up
                </Typography>
                <TextField
                sx={{minWidth: 300}}
                required
                label="FirstName"
                defaultValue=""
                onInput={ e => setFirstName(e.target.value) }
                /><TextField
                sx={{minWidth: 300}}
                required
                id="outlined-required"
                label="LastName"
                defaultValue=""
                onInput={ e => setLastName(e.target.value) }
                />
                <TextField
                sx={{minWidth: 300}}
                required
                label="Email"
                defaultValue=""
                onInput={ e => setEmail(e.target.value) }
                />
                <TextField
                type="password"
                sx={{minWidth: 300}}
                required
                label="Password"
                defaultValue=""
                onInput={ e => setPassword(e.target.value) }
                />
                <TextField
                type="password"
                sx={{minWidth: 300}}
                required
                label="Repeat Password"
                defaultValue=""
                onInput={ e => setrePassword(e.target.value) }
                />
                <Typography
                type="text"
                align='center'
                color="red"
                sx={{
                marginBottom: '10px',
                maxWidth: 300
                }}
                >
                    {authErr}
                </Typography>
                <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{width: 100,margin: '0 auto'}}
                align="center"
                type="submit"
                >
                Submit
                </Button>
            </Box>
        </Box>
    )
}
