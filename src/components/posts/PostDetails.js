import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import {  useParams } from 'react-router-dom';

import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import moment from 'moment';



export default function  PostDetails () {
    let {id} = useParams()
    useFirestoreConnect('posts');
    const posts = useSelector((state) => state.firestore.data.posts);
    const post = posts? posts[id] : null
    const auth = useSelector((state) => state.firebase.auth);

    if (!auth.uid) return <Navigate to="/signin" />
    
    
    
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
                            {moment(post.createdAt.toDate()).calendar()}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
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
