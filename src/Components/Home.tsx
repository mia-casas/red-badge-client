import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {CarouselProps} from './Interfaces'
import {Carousel, CarouselItem} from 'reactstrap';
import {Breadcrumbs, Menu, MenuItem, Slide, Collapse, ListItem, Link, Grid, Paper, GridList, GridListTile, BreadcrumbsTypeMap} from '@material-ui/core';
import Register from './Auth/Register'

// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import {Route, MemoryRouter} from 'react-router'

const Home: React.FC<{}> = () => {
    return(
        <div>
            {/* Top  Navigation */}
            <Breadcrumbs
            >                          {/* Stretch Goals: Styling, Dropdowns, React Router */}
                <Menu keepMounted open={false} >   {/* Menu or Dropdown? */}
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
                <Link>Home</Link>
                <Link>My Events</Link>
                <Link>Admin Users</Link>
            </Breadcrumbs>

        
            <Register />
            {/* Carousel */}
            


            {/* Event Cards */}

            <GridList cellHeight={200} spacing={1}></GridList>
            <GridListTile cols={5}>Why is it not showing test</GridListTile>

            {/* Categories */}
        <Grid container spacing={5}>

            <Grid item xs={2}>
                <Paper> Category 1 </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>Category 2 </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>Category 3</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>Category 4</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper>Category 5</Paper>
            </Grid>
        
        </Grid>

            {/* Footer */}


        </div>

    )
}

export default Home