import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Notification ()  {
    return (
        <Box>
            <Typography variant="body2" gutterBottom>
                Notifications <br/>
                Must upgrade plan for use firebase functions :(
            </Typography>
        </Box>
    )
}
