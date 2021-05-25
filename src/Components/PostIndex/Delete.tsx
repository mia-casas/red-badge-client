import React from 'react'
import {Button} from '@material-ui/core'

type IProps = {
    token: string | null,
    eventId: string
}

class DeletePost extends React.Component<IProps>{
    constructor(props:any){
        super(props);
        this.state = {
        token: '',
        eventId: ''
        }
    }
    
    
    
    deletePost = () => {
        console.log(this.props)
        fetch(`http://localhost:5005/post/delete/${this.props.eventId}`, {
            method: 'DELETE',
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${this.props.token}`
            })
        }) .then(() => console.log('Deleted'))
    }

    render(){
        return(
            <div>
                <Button onClick={(e) => this.deletePost()}>Delete</Button>
            </div>
        )
    }

}

export default DeletePost