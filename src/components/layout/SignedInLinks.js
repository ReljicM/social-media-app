import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch } from "react-redux";
import { logOut } from '../../store/actions/authActions';




export default function SignedInLinks({profile}) {
    
        const dispatch = useDispatch();
        const sgnOut = () => dispatch(logOut());
    
    return (
        <ButtonGroup disableElevation variant="contained">
            <Button href="/createpost">
                 New Post
             </Button>
            <Button onClick={sgnOut}>
                Log Out
            </Button>
            <Stack direction="row" spacing={2} sx={{marginLeft: '20px'}}>
                <Avatar>{profile.initials}</Avatar>
            </Stack>
        </ButtonGroup>
    )
}