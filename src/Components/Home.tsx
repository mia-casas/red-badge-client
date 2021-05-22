import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {CarouselProps, IUserProps} from './Interfaces'
import {Carousel, CarouselItem} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link, withRouter, RouteComponentProps} from 'react-router-dom';
import {Breadcrumbs, Menu, MenuItem, Button, Slide, Collapse, ListItem, Grid, Paper, GridList, GridListTile, Modal, BreadcrumbsTypeMap} from '@material-ui/core';
import Register from './Auth/Register'
import Login from './Auth/Login'
import Posts from './AllPosts'
import AdminHome from './AdminHome'

// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// import {Route, MemoryRouter} from 'react-router'

interface IMenuState {
    anchorEl: null | HTMLElement
}
class Home extends Component<{}, IMenuState & IUserProps>{
    constructor(props:any){
        super(props);
        this.state = {
            anchorEl: null,
            token: null
        }
    }

    handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        this.setState({
            anchorEl: e.currentTarget
        })
    }
    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    clearToken=() => {
        localStorage.clear();
        // localStorage.removeItem('token')
        // localStorage.setItem('token', `${this.state.token}`);
        
    } //not working??

    render() {return(
        <Router>
        <div>
            {/* Top  Navigation */}

            <Breadcrumbs> 
            <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e) => this.handleClick(e)}>
                Account
            </Button>
            <Menu 
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>   {/* Menu or Dropdown? */}
                    <MenuItem ><Link to="/Login">Login</Link></MenuItem>
                    <MenuItem onClick={(e) => this.clearToken}>Logout</MenuItem>
                </Menu>    
                <Link to="/">Home</Link>
                {/* <Link>My Events</Link> */}
                <Link to='/AdminHome'>Admin Users</Link>
            </Breadcrumbs>
            
                {/* <Route path="/Login">
                    
                </Route>
                
                <Route path="/AdminHome">
                    <AdminHome />
                </Route>
                 <Route path='/'>
                    <Home />
                </Route>  */}
            

        
            <Register />
            <Login />
            <Posts />

            <AdminHome />
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
        </Router>

    )}
}

export default Home