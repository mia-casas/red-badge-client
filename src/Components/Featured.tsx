import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {IPost, IResponse, IComment, IUserProps} from './Interfaces'
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);



class PostsWithComments extends React.Component<IUserProps, IResponse & IComment & IPost>{
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
            owner: '',
            like: false,
            comment: ''
            
        }
    }


fetchPosts = () => {
    fetch(`http://localhost:5005/likes/postinfo/:id`, {
      method: "GET",
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.token}`
      })
    }).then((response) => console.log(response))
}

componentDidMount(){
  this.fetchPosts()
  console.log(this.props)
}

render(){
    return(
        <div>
            <ComplexGrid />
        </div>
    )
}}

            // <GridList cellHeight={200} spacing={1}></GridList>
            // <GridListTile cols={5}>Why is it not showing test</GridListTile>

const ComplexGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 ??? JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default PostsWithComments