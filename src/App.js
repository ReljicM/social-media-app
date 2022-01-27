import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import CreatePost from './components/posts/CreatePost'
import PostDetails from './components/posts/PostDetails'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import ProfileDashboard from './components/profile/ProfileDashboard'


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
    },
    secondary: {
      light: '#e7e4e4',
      main: '#9e9e9e',
      dark: '#ba000d',
      contrastText: '#707070',
    },
  },
  
    typography:{
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
});

function App() {

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path='/' element={< Dashboard />} />
              <Route exact  path={'/post/:id'} element={< PostDetails />} />
              <Route exact path='/signup' element={< SignUp />} />
              <Route exact  path='/signin' element={< SignIn />} />
              <Route exact path='/createpost' element={< CreatePost />} />
              <Route exact  path='/profile/:id' element={< ProfileDashboard />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
