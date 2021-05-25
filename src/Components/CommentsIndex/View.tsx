import React from 'react';

interface IAllComments {
    comments: []
}

class ViewComments extends React.Component<IAllComments>{
    constructor(props:any){
        super(props)
        this.state = {
            comments: []
        }
        
    }


    allComments = () => {
        fetch(`http://localhost:5005/likes/all`, {
            method: "GET",
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then((response) => console.log(response.json))
    }

    render(){
        return(
            <div>
                Comments will go here
            </div>
        )
    }
}

export default ViewComments