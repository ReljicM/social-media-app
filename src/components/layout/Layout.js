import React from 'react'
import Navbar from './NavBar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Layout({ children }) {

    return (
        <Box className="layout">
            <Navbar />
            <Container
            sx={{
            width: '100%',
            minHeight: 800
            }}>
                { children }
            </Container>
            <Box sx={{backgroundColor: 'primary.main', minHeight: 100}}>
                <Typography align='center' style={{marginTop: '50px',color: 'white',paddingTop: 30}}>
                    Copyright © 2021 Mladen Reljic
                </Typography>
            </Box>
        </Box>
    )
}
