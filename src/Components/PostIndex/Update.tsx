import React from 'react';
import {IUserProps} from '../Interfaces';
import { Input, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {FormControl, Button} from '@material-ui/core'
//props to pull (token, eventId)

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
    isOpen: boolean

}

class UpdatePost extends React.Component<IProps, IPostEdit>{
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
            isOpen: false,

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

    toggle = (e:React.BaseSyntheticEvent) => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render(){
        return(
            <div>
                <Button onClick={(e) => this.toggle(e)}>Update</Button>
                <Modal isOpen={this.state.isOpen}>
                    <FormControl onSubmit={(e) => this.completeUpdate(e)}>
                    <ModalHeader>Edit Post: {this.props.title}</ModalHeader>
                    <ModalBody>
                    <div></div><Input type="date" required={true} name="Date" onChange={(e)=>{this.setState({editDate: e.target.value})}}></Input> 
                    <div></div><Input type="time" required={true} name="Time" onChange={(e)=>{this.setState({editTime: e.target.value})}}></Input>
                    <div></div><Input type="text" required={true} name="Location" placeholder="Location" onChange={(e)=>{this.setState({editLocation: e.target.value})}}></Input>
                    <div></div><Input type="text" required={true} name="Title" placeholder="Title" onChange={(e)=>{this.setState({editTitle: e.target.value})}}></Input>
                    <div></div><Input type="text" required={true} name="Content" placeholder="Description" onChange={(e)=>{this.setState({editContent: e.target.value})}}></Input>
                    <div></div><Input type="select" required={true} name="Category" onChange={(e)=>{this.setState({editCategory: e.target.value})}}>
                        <option>Select A Category</option>
                        <option value='Music'>Music</option>
                        <option value='Sports'>Sports</option>
                        <option value='Food'>Food&Drink</option>
                        <option value='Arts and Theater'>Arts&Theater</option>
                        <option value="Family Fun">Family Fun</option>
                    </Input>
                    <div></div><Input type="text" required={true} name="ImageURL" placeholder="Image URL" onChange={(e)=>{this.setState({editImageURL: e.target.value})}}></Input>
                    </ModalBody>
                    <ModalFooter>
                    <Button type="submit" >Finish Changes</Button>
                    </ModalFooter>
                    </FormControl>
                </Modal>
            </div>
        )
    }
}


export default UpdatePost