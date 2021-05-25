import React, {Component} from 'react';
import { BaseSyntheticEvent } from 'react';
import {IResponse, IPost} from './Interfaces'
import {Card, CardHeader, CardMedia, CardActions, CardContent, Button, ButtonBase, Typography, IconButton, Menu, MenuItem} from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Featured from './Featured'
import Comments from './Comments'
import DeletePosts from './PostIndex/Delete'
import UpdatePost from './PostIndex/Update'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Grid, GridList, GridListTile} from '@material-ui/core/';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth:345,
        display: 'inline',
    
    },
    media:{
        height:0,
        paddingTop: '56.25%',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    body: {
        textAlign: 'left',
        backgroundColor: '#e8e8e8',
    },
    space: {
        marginBottom: '3em',
        backgroundColor: '#e8e8e8',
        borderRadius: '0 0 5px 5px'
    },
    borderTop: {
        textAlign: 'left',
        backgroundColor: '#e8e8e8',
        borderRadius: '5px 5px 0 0',
        marginTop: '3em'
    }
})

type props = {
    eventId: '',
    token: string | null
}
interface IMenuState {
    anchorEl: null | HTMLElement
}

class Posts extends Component<props, IMenuState & IResponse &IPost> {
    
    constructor(props:props){
        super(props)
        this.state = { 
            posts: [],
            date: '',
            time: '',
            location: '',
            title: '',
            content: '',
            category: '',
            imageURL: '',
            owner: '',
            anchorEl: null,
        }
    }

    

    fetchPosts = () => {    
        fetch(`http://localhost:5005/post/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => this.setState({posts: data}))
        // .catch(Error => console.log(Error))

    }
    componentDidUpdate(){
        setTimeout(() => console.log(this.state.posts), 250)
    }

    componentDidMount(){
        this.fetchPosts()
    }
    

    render(){
        console.log(this.state.posts)
        return(<>
        
        {/* Filter Categories */}


        {/* <Grid container spacing={5}>

            <Grid item xs={3}>
                <Button onClick={(e) => this.fetchPosts(e)}>All Posts <br /> </Button>
            </Grid>
        
        </Grid> */}
            <Post posts={this.state.posts} token={this.props.token} ></Post>
            {/* <Comments modalTrue={this.modalTrue} /> */}
        </>
    )
  }
}

const Post = (props:any) => {
    console.log(props)
    const classes= useStyles();
    
    
    return(
      <div>
          {props.posts.map((post: any) => {
                // console.log(post)
                return(
                    <div>
                        
                        <Card className={classes.root}>
                            <CardHeader
                                action={
                                
                                <IconButton aria-label="settings" aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={props.handleClick} >
                                    <MoreVertIcon />
                                </IconButton>
                                
                                }
                                title={post.title}
                                subheader={post.date}
                                className={classes.borderTop}


                              
                            />
                            <CardMedia 
                                className={classes.media}
                                image={post.imageURL}
                                // alt="image unavailable"
                            />
                            <CardContent className={classes.body}>
                            {/* <Typography variant="h5" component="h2">{post.title}</Typography> */}
                            <Typography variant="h6" component="h6" color="textSecondary">{post.category}</Typography>
                                {/* <Typography variant="body2" component="p">Date: {post.date}</Typography> */}
                                <Typography variant="body2" component="p">Time: {post.time}</Typography>
                                <Typography variant="body2" component="p">Location: {post.location}</Typography>
                                <Typography variant="body2" component="p">Description: {post.content}</Typography>
                            </CardContent>
                            <CardActions disableSpacing={false} className={classes.space}>
                            <IconButton aria-label="add to favorites" aria-pressed="true">
                            <FavoriteIcon />
                            </IconButton>
                            <Button size="medium"><Comments eventId={post.id} token={props.token}/></Button>
                            <Button>
                                <UpdatePost title={post.title} eventId={post.id} token={props.token} />
                                </Button>
                            <Button><DeletePosts eventId={post.id} token={props.token} /> </Button>
                            </CardActions>
                        </Card>


                    </div>
                )
            })}
      </div>  
    )
}



export default Posts