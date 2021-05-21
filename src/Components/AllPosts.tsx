import React, {Component} from 'react';
import { BaseSyntheticEvent } from 'react';
import {IPost} from './Interfaces'

class Posts extends Component<{}, IPost> {
    constructor(props:any){
        super(props)
        this.state = {
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

    fetchPosts = (e:BaseSyntheticEvent) => {
        e.preventDefault()
    
        fetch(`http://localhost:5005/post/all`, {
            method: 'GET'
        }) .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(Error => console.log(Error))


        return(
            <div>
                {this.fetchPosts}
            </div>
        )
    }
}

// render(){
//     return(

//     )
// }
   


export default Posts