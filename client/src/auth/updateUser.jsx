import React from 'react'
import { Button, Card, Form, FormControl, FormGroup } from 'react-bootstrap'
import style from "./auth.module.css";

 const UpdateUser = () => {
  return (
    <div  className={style.auth}>
    <Card id={style.cardForm}>
    <Form id={style.form}>
            <FormGroup>
                <FormControl id={style.input} type='text' placeholder='Name'/>
            </FormGroup>
            <FormGroup>
                <FormControl id={style.input} type='email' placeholder='Email'/>
            </FormGroup>
            <FormGroup>
                <FormControl id={style.input} type='text' placeholder='Phone'/>
            </FormGroup>
            <FormGroup>
                <FormControl id={style.input} type='text' placeholder='Address'/>
            </FormGroup>
            <FormGroup>
                <FormControl id={style.input} type='file' placeholder='Address'/>
            </FormGroup>
            {/* <FormGroup>
                <FormLabel>Agent</FormLabel>
                <FormCheckLabel/>
            </FormGroup> */}
        
            <Button>Update</Button>
        </Form><br />

    </Card>
</div>
  )
}
export default UpdateUser
