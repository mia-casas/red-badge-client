import React from 'react';
import {FormControl, Container, Button, TextField, PropTypes } from '@material-ui/core';
import {Form} from 'reactstrap'
import {ILogin, IUserProps} from '../Interfaces';
import { BaseSyntheticEvent } from 'react';

type AcceptedProps = {
    newToken: CallableFunction
}
class Login extends React.Component<AcceptedProps, ILogin & IUserProps>{
    constructor(props: AcceptedProps){
        super(props);
        this.state = {
            email: '',
            password: '',
            token: ''
        };
    }

    loginUser = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        fetch(`http://localhost:5005/user/login`, {
            method: "POST",
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
          .then(data => this.props.newToken(data.token))    
    }
    componentDidUpdate(){
        setTimeout(() => {localStorage.setItem('token', `${this.state.token}`)}, 500)
    }

    componentDidMount = () => {
        this.setState({
            email: '',
            password: '',
        })
        
    }
    handleChange = (e: BaseSyntheticEvent) => {
        // console.log(e.target.name, e.target.value)
        this.setState((prevState) => ({
            ...prevState, [e.target.name] : e.target.value as Pick<ILogin, keyof ILogin>
        }))
    }
    render(){
        return(
            <div>
                <Form onSubmit={(e) => this.loginUser(e)}>
                    <FormControl>
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
                    <div><Button type='submit'>Login</Button></div>
                    
                </Form>
            </div>
        )
    }
}

export default Login