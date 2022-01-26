import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import moment from 'moment';


export default function ProfilePostSummary({post}) {
  
  
  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto', marginBottom: '10px'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="subtitle2" >
            Posted by the {post.authorFirstName} {post.authorLastName}
          </Typography>
          <Typography variant="caption" >
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
      </CardActionArea>
    </Card>
  );
}