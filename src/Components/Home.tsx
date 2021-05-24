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
import Comment from './Comments'

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
            token: null,
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

    newToken = (token:string) => {
        localStorage.setItem('item', token);
        this.setState({token: token})
        console.log(token)
    }


    clearToken=() => {
        localStorage.clear();
        
    } 

    render() {return(
        
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
                    <MenuItem onClick={(e) => this.clearToken()}>Logout</MenuItem>
                </Menu>    
                <Link to="/">Home</Link>
                {/* <Link>My Events</Link> */}
                <Link to='/AdminHome'>Admin Users</Link>
            </Breadcrumbs>
                <Switch>
                <Route path="/Login"><Login newToken={this.newToken}/><Register newToken={this.newToken}/></Route>
                <Route path="/AdminHome"><AdminHome token={this.state.token}/></Route>
                <Route path='/'><Posts eventId={''} token={this.state.token}/></Route>  
                </Switch>



            {/* Footer */}

        </div>
        

    )}
}

export default Home