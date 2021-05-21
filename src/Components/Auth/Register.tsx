import React from 'react';
import {FormControl, Container, Button, TextField, PropTypes } from '@material-ui/core';
import {Form} from 'reactstrap'
import {IUser} from '../Interfaces';
import { BaseSyntheticEvent } from 'react';
import {IUserProps} from '../Interfaces'

class Register extends React.Component<{}, IUser & IUserProps>{
    constructor(props: any){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            admin: false,
            token: ''
        };
    }

    registerUser = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        fetch(`http://localhost:5005/user/register`, {
            method: "POST",
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
          .then(data => this.setState({token: data.token}))    
    }
    componentDidUpdate(){
        setTimeout(() => {localStorage.setItem('token', `${this.state.token}`)}, 500)
    }
    // localStorage = (newToken) => {
    //     localStorage.setItem('token', newToken)
    // }
    componentDidMount = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            admin: false
        })
        
    }
    handleChange = (e: BaseSyntheticEvent) => {
        // console.log(e.target.name, e.target.value)
        this.setState((prevState) => ({
            ...prevState, [e.target.name] : e.target.value as Pick<IUser, keyof IUser>
        }))
    }
    render(){
        return(
            <div>
                <Form onSubmit={(e) => this.registerUser(e)}>
                    <FormControl>
                    <TextField 
                    placeholder="First Name"
                    name="firstName"
                    onChange = {(e) => this.handleChange(e)}
                    ></TextField>
                    <TextField 
                    placeholder="Last Name"
                    name="lastName"
                    onChange = {(e) => this.handleChange(e)}
                    ></TextField>
                    <TextField 
                    placeholder="Email"
                    name="email"
                    onChange = {(e) => this.handleChange(e)}
                    ></TextField>
                    <TextField 
                    placeholder="Password"
                    name="password"
                    onChange = {(e) => this.handleChange(e)}
                    ></TextField>
                    </FormControl>
                    <div><Button type='submit'>Sign Up</Button></div>
                    
                </Form>
            </div>
        )
    }
}

export default Register