import * as React from 'react';
import ProfilePostSummary from './ProfilePostSummary'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'

export default function PostsList({ posts }) {
  
  return (
    <Box>
        
      { posts && posts.map(post => {
        
        return (
          <Link style={{textDecoration: 'none', display: 'block', margin: '0 auto'}} to={/post/ + post.id} key={post.id}>
            <ProfilePostSummary post={post}  />
          </Link>
        )
    })}
      
    </Box>  
    
  );
}