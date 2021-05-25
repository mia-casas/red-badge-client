import React from 'react';
import {Button, List, ListItem} from '@material-ui/core'
import DeleteComment from './Delete'
import UpdateComment from './Update'

interface IAllComments {
    comments: any
}
type props = {
    token: string | null
    commentId: ''
}


class ViewComments extends React.Component<props,  IAllComments>{
    constructor(props:any){
        super(props)
        this.state = {
            comments: [],
        }
        
    }


    allComments = () => {
        fetch(`http://localhost:5005/likes/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
        .then(data => this.setState({comments: data}))
    }

    componentDidMount(){
        this.allComments()
    }

    render(){
        return(
            <div>
                <h1>User Comments</h1>
                {this.state.comments.map((comment:any) => {
                    return <div>
                        
                        <List>
                            <ListItem >{comment.comment}</ListItem >
                            <Button><UpdateComment token={this.props.token} commentId={comment.id} /></Button>
                            <Button><DeleteComment token={this.props.token} commentId={comment.id}/></Button>
                        </List>
                        </div>
                })}
            </div>
        )
    }
}

export default ViewComments