import React from 'react';
import {IPost} from './Interfaces'

class Featured extends React.Component<IPost>{
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
}

// fetchPosts = () => {
//     fetch(`http://localhost:5005/likes/postinfo/`)
// }

export {}