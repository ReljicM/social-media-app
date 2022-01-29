import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';


export default function CircularIndeterminate() {
  const loader = useSelector( state => state.auth.loader)
  console.log(loader)
 
    return (
      <Backdrop
      
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  