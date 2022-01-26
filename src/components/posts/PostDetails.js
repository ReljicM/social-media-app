import React, { useCallback, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import {  useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {  useFirestore } from "react-redux-firebase";

import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import Button from '@mui/material/Button';
import moment from 'moment';

import { deletePost } from '../../store/actions/postActions'
import { updatePost } from '../../store/actions/postActions'
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';


export default function  PostDetails () {
    const [updateContent, setUpdateContent] = useState()

    let {id} = useParams();
    const navigate = useNavigate();

    useFirestoreConnect('posts');
    const posts = useSelector((state) => state.firestore.data.posts);
    const post = posts? posts[id] : null
    const auth = useSelector((state) => state.firebase.auth);

    const firestore = useFirestore();
    const dispatch = useDispatch();

    const delPost = useCallback(
        id =>  dispatch(deletePost({ firestore }, id)),
        [firestore, dispatch]
    );
    const updPost = useCallback(
        post =>  dispatch(updatePost({ firestore }, id, post)),
        [firestore,dispatch,id]
    );

    const [icon, setIcon] = useState(false);

    console.log(post)
    console.log(auth)

    if (!auth.uid) return <Navigate to="/signin" />

    const handleDeletePost = e => {
        e.preventDefault();
        delPost(id);
        navigate('/');
    }
    const handleOnClick = e => {
        e.preventDefault();
        setIcon(!icon)
    }

    const handleUpdatePost = e => {
        e.preventDefault();
        updPost({updateContent});
        navigate('/');
    }
    
    
    
    console.log()
    if (post) {
        return (
        <Container
        sx={{
        width: '100%',
        
        }}
        >
            <Box sx={{padding: '20px',width: '600px',display: 'block',margin: '0 auto'}}>
                <Card sx={{ maxWidth: 500, marginBottom: '10px', display: 'block', margin: '0 auto' }}>
                    <CardActionArea>
                        <EditIcon
                        sx={{
                            float: 'right',
                            margin: 5,
                            display: (( post.authorId === auth.uid ? 'block' : 'none'))
                        }}
                        onClick={handleOnClick}
                        />
                        <CardContent>
                            <Typography variant='h5'component="div" >
                                {`${post.title}`}
                            </Typography>
                            <Typography variant='subtitle1' >
                                {`${post.content}`}
                            </Typography>
                            <Typography gutterBottom component="div" variant='caption'  >
                                Posted By {post.authorFirstName} {post.authorLastName}
                            </Typography>
                            <Typography variant='caption' >
                            {post.updateAt ?
                                <Typography
                                variant="caption" 
                                >
                                Update at {moment(post.updateAt.toDate()).calendar()}
                                </Typography>
                                : 
                                moment(post.createdAt.toDate()).calendar()}
                            </Typography>
                        </CardContent>
                        <TextField
                        onInput={ e => setUpdateContent(e.target.value) }
                        id="standard-basic"
                        label="Update"
                        variant="standard"
                        sx={{
                            width: '90%',
                            display: ((icon ? 'flex' : 'none')),
                            margin: '0 auto'
                        }}
                        />
                    </CardActionArea>
                    
                    <Box
                    sx={{
                    float: 'right',
                    marginBottom: '10px',
                    marginTop: '10px',
                    display: ((post.authorId === auth.uid)?  'flex' : 'none')
                    }}
                    >
                        <Button
                        onClick={handleUpdatePost}
                        variant="contained"
                        sx={{
                        marginRight: '10px',
                        backgroundColor: 'primary.main'
                        }}
                        >
                        Update
                        </Button>
                        <Button
                        variant="contained"
                        sx={{
                        marginRight: '10px',
                        backgroundColor: 'secondary.dark',
                        }}
                        onClick={handleDeletePost}
                        >
                        Delete
                        </Button>
                    </Box>
                </Card>
            </Box>
        </Container>
        )
    } else {
        return (
            <Container>
                <Box>
                    <Typography>
                        Page Loading...
                    </Typography>
                </Box>
            </Container>
            )
    }

    
}
