import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { createPost } from '../../store/actions/postActions'
import { useDispatch } from "react-redux";
import {  useFirestore } from "react-redux-firebase";

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function CreatePost() {

    
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const navigate = useNavigate();
    
    const firestore = useFirestore();
    const dispatch = useDispatch();
    const create = useCallback(
        post =>  dispatch(createPost({ firestore }, post)),
        [firestore, dispatch]
    );
    const auth = useSelector(state => state.firebase.auth);

    if (!auth.uid) return <Navigate to="/signin" />
    
    const handleSubmit = (e) => {
        e.preventDefault();
        create({title, content})
        navigate('/')
        
    }
    
    return (
        <Box
        component="form"
        sx={{
        margin: '0 auto',
        display: 'flex',
        width: 600,marginTop: '50px',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        
        
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
    >
        <Box sx={{margin: '0 auto',display: 'grid'}}>
            <Typography variant='h5' align='center'>
                
            </Typography>
            <TextField
            sx={{minWidth: 500}}
            required
            id="title"
            label="Title"
            defaultValue=""
            onInput={ e => setTitle(e.target.value)}
            />
            <TextField
            sx={{minWidth: 500}}
            required
            multiline
            maxRows={4}
            id="content"
            label="Content"
            defaultValue=""
            onInput={ e => setContent(e.target.value)}
            />
            <Box
            sx={{
                margin: '0 auto',
            }}
            >
                <Button
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                sx={{
                    width: '400px'
                }}
                >
                Post
                </Button>
            </Box>
            
        </Box>
        
        
    </Box>
    )
}
