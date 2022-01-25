import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function SignedOutLinks() {
    return (
        <ButtonGroup disableElevation variant="contained">
            <Button href="/signup">
                Sign Up
             </Button>
            <Button href="/signin">
                Log In
            </Button>
        </ButtonGroup>
    )
}
