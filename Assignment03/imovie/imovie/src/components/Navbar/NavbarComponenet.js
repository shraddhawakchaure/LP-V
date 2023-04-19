import React from 'react'
import{AppBar,Toolbar,Button,IconButton ,Box,Tab,Tabs}from'@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import DrawerComponent from './DrawerComponent';





const NavbarComponenet = () => {

  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <LiveTvIcon/>
          </IconButton>
          
          <Tabs >
            <Tab sx={{color:'white'}}  icon={<MovieIcon />} label="Movies"/>
            <Tab sx={{color:'white'}} icon={<TrendingUpIcon/>}label="Trending"/>
            <Tab sx={{color:'white'}}  icon={<LocalMoviesIcon/>}label="TV Series"/>
          </Tabs>
          <MenuIcon sx={{marginLeft:'auto'}} />
         
        </Toolbar>
      </AppBar>
    </Box>
    <DrawerComponent/>
    </>
  )
}

export default NavbarComponenet;
