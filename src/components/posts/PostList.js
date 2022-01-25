import * as React from 'react';
import PostSummary from './PostSummary'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export default function PostsList({ posts }) {
  
  return (
    <Box>
      { posts && posts.map(post => {
        
        return (
          <Link style={{textDecoration: 'none'}} to={/post/ + post.id} key={post.id}>
            <PostSummary post={post}  />
          </Link>
        )
    })}
      
    </Box>  
    
  );
}
