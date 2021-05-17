import React from 'react'
import {TextField, FormControl, Input} from '@material-ui/core';


interface Values {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
interface Props {
    onSubmit: (values: Values) => void
}

const Auth: React.FC<Props> = ({onSubmit}) => {
    return(
        <div>
            <FormControl
            // initialValues={{firstName: "", lastName: "", email: ""}}
            // onSubmit={values => {onSubmit(values)}}
            
            >
                <TextField 
                name="firstName"
                // value={values.firstName}
                />
            </FormControl>
            
        </div>
    )
    
}


export default Auth