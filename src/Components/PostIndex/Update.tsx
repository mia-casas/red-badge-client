import React from 'react';
import {IUserProps} from '../Interfaces';
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Form} from 'reactstrap'

//props to pull (token, eventId)

type UpdateIndex = {
    isUpdateActive: boolean,
}

type IProps = {
    token: ''
    eventId: ''
    title: ''
}

interface IPostEdit {
    editDate: string, 
    editTime: string,
    editLocation: string,
    editTitle: string,
    editContent: string,
    editCategory: string,
    editImageURL: string,

}

class UpdatePost extends React.Component<IProps, IPostEdit & UpdateIndex>{
    constructor(props:any){
        super(props);
        this.state = {
            editDate: '', 
            editTime: '',
            editLocation: '',
            editTitle: '',
            editContent: '',
            editCategory: '',
            editImageURL: '',
            isUpdateActive: false,

        }
    }

    // editUpdatePost = (post: {}) => {                //Fill with eventId?
    //     this.setState({postToUpdate: post)
    // }

    // updateOn = () => {
    //     this.setState({isUpdateActive: true})
    // }

    // updateOff = () => {
    //     this.setState({isUpdateActive: false})
    // }


    completeUpdate = (e:React.BaseSyntheticEvent) => {
        e.preventDefault();
        fetch(`http://localhost:5005/post/update/${this.props.eventId}`, {
            method: 'PUT',
            body: JSON.stringify({
                    date: this.state.editDate,
                    time: this.state.editTime,
                    location: this.state.editLocation,
                    title: this.state.editTitle,
                    content: this.state.editContent,
                    category: this.state.editCategory,
                    imageURL: this.state.editImageURL
                
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': `Bearer ${this.props.token}`
            })
        }) .then((response) => response.json())
        .then((data) => console.log(data))
    }


    render(){
        return(
            <div>
                <Modal isOpen={true}>
                    <Form onSubmit={(e) => this.completeUpdate(e)}>
                    <ModalHeader>Edit Post: {this.props.title}</ModalHeader>
                    <ModalBody>
                    <Input type="date" required={true} name="Date" onChange={(e)=>{this.setState({editDate: e.target.value})}}></Input> 
                    <Input type="time" required={true} name="Time" onChange={(e)=>{this.setState({editTime: e.target.value})}}></Input>
                    <Input type="text" required={true} name="Location" onChange={(e)=>{this.setState({editLocation: e.target.value})}}></Input>
                    <Input type="text" required={true} name="Title" onChange={(e)=>{this.setState({editTitle: e.target.value})}}></Input>
                    <Input type="text" required={true} name="Content" onChange={(e)=>{this.setState({editContent: e.target.value})}}></Input>
                    <Input type="select" required={true} name="Category" onChange={(e)=>{this.setState({editCategory: e.target.value})}}>
                        <option>Select One</option>
                        <option value='Music'>Music</option>
                        <option value='Sports'>Sports</option>
                        <option value='Food'>Food&Drink</option>
                        <option value='Arts and Theater'>Arts&Theater</option>
                        <option value="Family Fun">Family Fun</option>
                    </Input>
                    <Input type="text" required={true} name="ImageURL" onChange={(e)=>{this.setState({editImageURL: e.target.value})}}></Input>
                    </ModalBody>
                    <ModalFooter>
                    <Button type="submit" >Finish Changes</Button>
                    </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }
}


export default UpdatePost