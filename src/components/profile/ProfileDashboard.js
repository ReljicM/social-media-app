import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProfilePostList from './ProfilePostList'
import { styled } from '@mui/material/styles';
import {  useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {  useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CreatePost from '../posts/CreatePost';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cover: {
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,29,29,0.56) 100%, rgba(0,212,255,1) 100%)',
      border: 0,
      borderRadius: 3,
      
      color: 'white',
      height: 250,
      padding: '0 30px',
    },
  });

export default function ProfileDashboard() {
    const classes = useStyles();
    
    let {id} = useParams();
    const posts = useSelector(state => state.firestore.ordered.posts);
    const post = posts? posts[id] : null
    const auth = useSelector(state => state.firebase.auth);
    const profile = useSelector((state => state.firebase.profile))

    console.log(profile);
    console.log(auth)
    console.log(post)
    useFirestoreConnect([
        {
        collection: 'posts',
        doc: post,
        where: ["authorId", "==", auth.uid],
        
        orderBy:['createdAt', 'desc'],
        },
        
      ])
    
      

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.secondary.light,
        boxShadow: 'none'
      }));
      if (profile) {
        return ( 
            <Box sx={{ flexGrow: 1,}} >
                <Grid container
                spacing={2}
                className={classes.cover}
                 sx={{
                    height: '250px',
                    
                    marginTop: '0px',
                    margin: '0 auto',
                    display: 'block',
                    }}>
                    <Grid
                    item xs={4}
                     sx={{
                        marginTop: '0px',
                        display: 'block',
                        margin: '0 auto',
                        marginBottom: '10px',
                        }}
                        >
                        <Item
                        sx={{
                        backgroundColor: 'transparent',
                        bborderRadius: 0,
                        boxShadow: 'none',
                        margin: '0 auto'
                        }}
                        >
                        <Avatar
                        alt={profile.initials}
                        sx={{ height: '150px', width: '150px',fontSize: '4rem', margin: '0 auto'}}
                        >
                        {profile.initials}
                        </Avatar>
                        </Item>
                        </Grid>
                        <Grid item xs={8} sx={{margin: '0 auto'}}>
                            <CreatePost />
                        <Item>
                            <ProfilePostList posts={posts} />
                        </Item>
                    </Grid>
                </Grid>
                </Box>
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
  


