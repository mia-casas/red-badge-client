import React from 'react';
import {Card, Modal, Button, Input, InputLabel, TextField, MenuItem} from '@material-ui/core';
import {Form} from 'reactstrap'
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
            owner: '',
        }
    }


    createPost = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        fetch(`http://localhost:5005/post/create`, {
            method: 'POST',
            body: JSON.stringify({post:{
                date: this.state.date,
                time: this.state.time,
                location: this.state.location,
                title: this.state.title,
                content: this.state.content,
                category: this.state.category,
                imageURL: this.state.imageURL}
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0NWRmZmIwLTg4ZjktNDk5ZC05NTk1LWNmNWFhYjFmNGY1ZSIsImlhdCI6MTYyMTcwODczNywiZXhwIjoxNjIxNzk1MTM3fQ.hgI_bvEE6FpRWAmElpLKYgvKsAzErAOcAs69oGT-Xuo'
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            })
    }

    componentDidMount = () => {
        this.setState({
            date: '',
            time: '',
            location: '',
            title: '',
            content: '',
            category: '',
            imageURL: ''
        })
    }

    handleChange = (e:BaseSyntheticEvent) => {
        console.log(e.target.name, e.target.value)
        this.setState((prevState) => ({
            ...prevState, [e.target.name] : e.target.value as Pick<IPost, keyof IPost>
        }))
    }
    render(){
        return(
            <div>
                <Form onSubmit={(e) => this.createPost(e)}>
                    <h2>Fill in with the appropriate information:</h2>
                    <div>
                        <InputLabel>Date:</InputLabel>
                        <Input type="date" required={true} name="Date" onChange={(e)=>{this.setState({date: e.target.value})}}></Input>  {/*Would like a Date Picker */}
                    </div>
                    <div>
                        <InputLabel>Time:</InputLabel>
                        <Input type="time" required={true} name="Time" onChange={(e)=>{this.setState({time: e.target.value})}}></Input>
                    </div>
                    <div>
                        <InputLabel>Location:</InputLabel>
                        <Input type="text" required={true} name="Location" onChange={(e)=>{this.setState({location: e.target.value})}}></Input>
                    </div>
                    <div>
                        <InputLabel>Title:</InputLabel>
                        <Input type="text" required={true} name="Title" placeholder="Title" onChange={(e)=>{this.setState({title: e.target.value})}}></Input>
                    </div>
                    <div>
                        <InputLabel>Description:</InputLabel>
                        <Input type="text" required={true} name="Description" placeholder="Description" onChange={(e)=>{this.setState({content: e.target.value})}}></Input>
                    </div>
                    <div>
                        <InputLabel>Category:</InputLabel>
                        <TextField select name="Category" placeholder="Select One" onChange={(e)=>{this.setState({category: e.target.value})}}>
                        <MenuItem >Select One</MenuItem>
                        <MenuItem value='Music'>Music</MenuItem>
                        <MenuItem value='Sports'>Sports</MenuItem>
                        <MenuItem value='Food'>Food&Drink</MenuItem>
                        <MenuItem value='Arts and Theater'>Arts&Theater</MenuItem>
                        <MenuItem value="Family Fun">Family Fun</MenuItem>
                        </TextField>
                    </div>
                    <div>
                        <InputLabel>Select Image:</InputLabel>
                        {/* <Input type="image" name="Event Photo" placeholder="Select image to upload"></Input> */}
                    </div>
                
                        <Button type="submit">Create Post</Button>
                
                </Form>
            </div>
        )
    }

}

export default AdminHome


