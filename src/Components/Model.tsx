// import React from 'react'
// import {TextField, Button, FormControl, Input} from '@material-ui/core';
// import {Formik, Form} from 'formik'
// import { BaseSyntheticEvent } from 'react';


// interface Values {
//     firstName: string,
//     lastName: string,
//     email: string,
//     password: string
// }
// interface Props {
//     onSubmit: (values: Values) => void,
// }

// const Auth: React.FC<Props> = (values) => {

//     const registerUser = {
//         onSubmit: fetch(`http://localhost:5005/user/register`, {
//             method: 'POST',
//             body: JSON.stringify({
//                 firstname: values,
//                 lastName: values,
//                 email: values,
//                 password: values
//             }),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         }) .then((res) => res.json())
//         .then((data) => console.log(values))
//     }
//     return(
//     <Formik initialValues={{firstName: '', lastName: '', email: '', password: ''}}
//         onSubmit =>
//         {(values:any, handleChange:any, handleBlur:any) => (
//         <Form >
//             <div>
//             <TextField 
//             placeholder="First Name"
//             name="firstName"
//             value = {values.firstName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             ></TextField>
//             </div>
//             <div>
//             <TextField 
//             placeholder="Last Name"
//             name="lastName"
//             value = {values.lastName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             ></TextField>
//             </div>
//             <div>
//             <TextField 
//             placeholder= "Email"
//             name="email"
//             value = {values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             ></TextField>
//             </div>
//             <div>
//             <TextField 
//             placeholder="Password"
//             name="password"
//             type="password"
//             value = {values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             ></TextField>
//             </div>
//             <Button type="submit">Sign Up</Button>
//         </Form>
//         )}
//     </Formik>
//     )   
// }


export {}