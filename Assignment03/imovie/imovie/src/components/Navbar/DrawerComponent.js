import React from 'react'
import {
    Box,
    Drawer,
    Button,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    paper, makeStyles
} from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { InboxIcon, MailIcon } from '@mui/icons-material';
import themes from '../../Utils/theme.js'
import { pink, lightBlue } from "@mui/material/colors";



// const useStyles = makeStyles(theme => { { drawer: { backgroundColor: theme.drawer} } });
const DrawerComponent = () => {
    // const classes=useStyles();
    return (
        <Drawer sx={{
            ".MuiDrawer-paper": {
                width: "18%",
                boxSizing: "border-box",
                bgcolor: pink[400],
                color: lightBlue[700],
            },
        }} open={true} onClose={false} anchor="right">
            <List>
                <ListItem>
                    <ListItemIcon>
                        <MovieIcon />
                    </ListItemIcon>
                    <ListItemText primary="Movies" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <TrendingUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Trending" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <LocalMoviesIcon />
                    </ListItemIcon>
                    <ListItemText primary="TV SeriesS" />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default DrawerComponent