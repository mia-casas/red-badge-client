import React, {Component} from 'react';
import { BaseSyntheticEvent } from 'react';
import {IResponse, IPost} from './Interfaces'
import {Card, CardHeader, CardMedia, CardActions, CardContent, Button, Typography, IconButton} from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth:345,
    },
    media:{
        height:0,
        paddingTop: '56.25%'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
})

class Posts extends Component<{}, IResponse &IPost> {
    constructor(props:any){
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
            owner: ''
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
        return(
        <div>
            <Post posts={this.state.posts}></Post>
        </div>
    )
  }
}

const Post = (props:any) => {
    console.log(props)
    const classes= useStyles();
    
    return(
      <div>
          {props.posts.map((post: any) => {
                console.log(post)
                return(
                    <div>
                        <Card className={classes.root}>
                            <CardHeader
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={post.title}
                                subheader={post.date}
                            />
                            <CardMedia 
                                className={classes.media}
                                image={post.imageURL}
                                // alt="image unavailable"
                            />
                            <CardContent>
                            {/* <Typography variant="h5" component="h2">{post.title}</Typography> */}
                            <Typography variant="h6" component="h6" color="textSecondary">{post.category}</Typography>
                                {/* <Typography variant="body2" component="p">Date: {post.date}</Typography> */}
                                <Typography variant="body2" component="p">Time: {post.time}</Typography>
                                <Typography variant="body2" component="p">Location: {post.location}</Typography>
                                <Typography variant="body2" component="p">Description: {post.content}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <Button size="medium">Rate & Review</Button>
                            </CardActions>
                        </Card>


                    </div>
                )
            })}
      </div>  
    )
}



export default Posts