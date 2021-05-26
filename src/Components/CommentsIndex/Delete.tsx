import React from 'react';
import {Button} from '@material-ui/core'


type IProps = {
    token: string | null
    commentId: ''

}


class DeleteComment extends React.Component<IProps, {}>{
    constructor(props:IProps){
        super(props)
        this.state = {

        }
    }


    deleteComment = (e:React.BaseSyntheticEvent) => {
        fetch(`http://localhost:5005/likes/delete/${this.props.commentId}`, {
            method: 'DELETE',
            headers: new Headers ({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${this.props.token}`
            })
        }) .then(() => console.log('Deleted'))
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Button onClick={(e) => this.deleteComment(e)}>Delete</Button>
            </div>
        )
    }

}


export default DeleteComment