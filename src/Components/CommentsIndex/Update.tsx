import React from 'react';
import {Button} from '@material-ui/core';
import {Modal, Input, ModalHeader, ModalFooter, Form, ModalBody} from 'reactstrap'

type props = {
    token: string | null,
    commentId: ''
}

interface ICommentEdit {
    editComment: string,
    isOpen: boolean
}


class UpdateComment extends React.Component<props, ICommentEdit>{
    constructor(props:any){
        super(props);
        this.state = {
            editComment: '',
            isOpen: false
        }
    }

    updateComment = (e:React.BaseSyntheticEvent) => {
        e.preventDefault()
        fetch(`http://localhost:5005/post/update/${this.props.commentId}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment: this.state.editComment
           }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${this.props.token}`
            })
        }). then((response) => response.json())
            .then((data) => console.log(data))
    }
  
toggle = (e:React.BaseSyntheticEvent) => {
    this.setState({isOpen: !this.state.isOpen})
    console.log(`${this.state.editComment}hello`)
}
 
    render(){
        return(
            <div>
                <Button onClick={(e) => this.toggle(e)} >Update</Button>
                <Modal isOpen={this.state.isOpen}>
                    <Form onSubmit={(e) => this.updateComment(e)}>
                        <ModalHeader>Rate and Review</ModalHeader>
                        <ModalBody>
                            <Input type="text" onChange={(e)=>{this.setState({editComment: e.target.value})}}></Input>
                        </ModalBody>
                        <ModalFooter><Button type='submit' >Finish</Button></ModalFooter>
                    </Form>
                </Modal>

            </div>
        )
    }
}

export default UpdateComment