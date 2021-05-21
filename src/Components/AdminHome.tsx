import React from 'react';
import {Card, Modal, Button, Input, InputLabel} from '@material-ui/core';
import {InputProps} from '@material-ui/core/Input/Input'
import {IPost} from './Interfaces'
import { BaseSyntheticEvent } from 'react';


export type MoreProps = {
    children: boolean
}

class AdminHome extends React.Component<InputProps, IPost>{
    constructor(props:any){
        super(props)
        this.state= {
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


    createPost = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        fetch(`http://localhost:5005/post/create`, {
            method: 'POST',
            // body: JSON.stringify,
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyMDA5YTRhLTJkM2MtNDZiNC1iNzE5LWU5ZjVmZmQyYzIxNCIsImlhdCI6MTYyMTM2MDc4OCwiZXhwIjoxNjIxNDQ3MTg4fQ.5KHyHSnS52aQTkeJuUE4fIabkZJ9JlgYRXfo3f_RBUc'
            })
        }).then((res) => res.json())
        .then((postInfo) =>{
            
        })
    }
    render(){
        return(
            <div>
                
                    <h2>Fill in with the appropriate information:</h2>
                    <div>
                        <InputLabel>Date:</InputLabel>
                        <Input type="date" required={true} name="Date"></Input>  {/*Would like a Date Picker */}
                    </div>
                    <div>
                        <InputLabel>Time:</InputLabel>
                        <Input type="time" required={true} name="Time"></Input>
                    </div>
                    <div>
                        <InputLabel>Location:</InputLabel>
                        <Input type="text" required={true} name="Location"></Input>
                    </div>
                    <div>
                        <InputLabel>Title:</InputLabel>
                        <Input type="text" required={true} name="Title" placeholder="Title"></Input>
                    </div>
                    <div>
                        <InputLabel>Description:</InputLabel>
                        <Input type="text" required={true} name="Description" placeholder="Description"></Input>
                    </div>
                    <div>
                        <InputLabel>Category:</InputLabel>
                        <Input type="select" name="Category" placeholder="Select One"></Input>
                    </div>
                    <div>
                        <InputLabel>Select Image:</InputLabel>
                        <Input type="image" name="Event Photo" placeholder="Select image to upload"></Input>
                    </div>
                
                        {/* <option>Select One</option>
                        <option>Music</option>
                        <option>Sports</option>
                        <option>Food&Drink</option>
                        <option>Arts&Theater</option>
                        <option>Family Fun</option> */}
                        <Button>Create Post</Button>
                
                <Card>

                </Card>
                
                
            </div>
        )
    }

}

export default AdminHome