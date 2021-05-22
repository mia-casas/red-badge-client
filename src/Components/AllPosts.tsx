import React, {Component} from 'react';
import { BaseSyntheticEvent } from 'react';
import {IResponse, IPost} from './Interfaces'

class Posts extends Component<{}, IResponse &IPost> {
    constructor(props:any){
        super(props)
        this.state = { 
            posts: [],
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

    fetchPosts = () => {    
        fetch(`http://localhost:5005/post/all`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }) .then((response) => response.json())
        .then((data) => console.log(data))
        // .catch(Error => console.log(Error))

    }

    componentDidMount(){
        this.fetchPosts()
    }
    render(){return(
        <div>

        </div>
    )
  }
}


   


export default Posts