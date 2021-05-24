import React from 'react';
import {IComment} from './Interfaces'
import {Button} from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Input, Modal, ModalBody, ModalFooter, ModalHeader, Form } from 'reactstrap';


function getModalStyle() {
  const top = -100;
  const left = 20;

  return {
    top: `${top}%`,
    left: `${left}%`,
    // transform: `translate(${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'relative',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

type isModal = {
  isModal: boolean
}

class Comment extends React.Component<{}, isModal & IComment>{
    constructor(props:any){
        super(props);
        this.state = {
        isModal: false,
        like: false,
        comment: ''
    }}

    modalTrue = () => {
      this.setState({
        isModal: !this.state.isModal,
      })
    }


createComment = (e: React.BaseSyntheticEvent) => {
    fetch(`http://localhost:5005/likes/create`, {
        method: "POST",
        body: JSON.stringify({like:{ 
            like: this.state.like,
            comment: this.state.comment
        }}),
        headers: new Headers({
            'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0NWRmZmIwLTg4ZjktNDk5ZC05NTk1LWNmNWFhYjFmNGY1ZSIsImlhdCI6MTYyMTgxNTc0MywiZXhwIjoxNjIxOTAyMTQzfQ.juWoARxrRGDZiQ6bLB0yQDfcO5n1cwMzUSpFT9KeZ08'`
        })
    }).then((res) => res.json())
    .then((data) => console.log(data))
}


componentDidMount = () => {
    this.setState({
        comment: ''
    })
}

handleChange = (e:React.BaseSyntheticEvent) => {
    console.log(e.target.name, e.target.value)
    this.setState((prevState) => ({
        ...prevState, [e.target.name] : e.target.value as Pick<IComment, keyof IComment>
    }))
  }



render(){
    return(
        <div>
            <Display openModal={this.modalTrue} isOpen={this.state.isModal} create={this.createComment} value={this.state.comment} setState={this.handleChange}/>
        </div>
    )
}

}

const Display = (props:any) => {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  
  return(
    <div>
      <Button onClick={props.openModal}>Rate and Review </Button>
            <Modal 
            style={modalStyle}  className={classes.paper}
            isOpen={props.isOpen}
            toggle={props.openModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
                <ModalHeader id="simple-modal-title">Let Us Know What You Think</ModalHeader>
                <ModalBody  id="simple-modal-description">
                  <Form onSubmit={props.create}>
                <Input type="textarea" placeholder= "Write a comment..." value={props.value} onChange={props.setState} />
                  </Form>
                </ModalBody>
                <ModalFooter>
                <Button type="submit">Post</Button>
            </ModalFooter>
            </Modal>
    </div>
  )
}

export default Comment


// HOW DO I CONNECT POST ID??