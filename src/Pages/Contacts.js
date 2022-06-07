import React, { useEffect, useState } from 'react'
import {Form, Button, Container} from "react-bootstrap";

export default function Contacts() {
    const [email, setEmail] = useState('');
    const [textarea, setTextArea] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [textareaDirty, setTextAreaDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не може бути порожнім');
    const [textareaError, setTextAreaError] = useState('Поле для коментаря не може бути порожнім');
    const [formValid, setFormValid] = useState(false);
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value.toLowerCase()))){
            setEmailError('Некоректний email')
        } else {
            setEmailError('')
        }
    }
    const textareaHandler = (e) => {
        setTextArea(e.target.value)
        if (e.target.value.length < 20) {
          setTextAreaError('Поле для коментаря повинен мати не менше 20 символів')
            if (!e.target.value) {
              setTextAreaError('Поле для коментаря не може бути порожнім')
            }
        } else {
          setTextAreaError()
        }
    }
    const blurHandler = (e) => {
        switch(e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setTextAreaDirty(true)
                break
        }
    }
    useEffect( () => {
        if(emailError || textareaError){
            setFormValid(false)
        } else{
            setFormValid(true)
        }
    },[emailError, textareaError])
  
    return (
    <Container>
        <div className='feedback'>
            <Form>
                <h1>Contacts us</h1>
                <Form.Group controlId='fromBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                    <Form.Control onChange={e => emailHandler(e)} name='email' value={email} onBlur={e => blurHandler(e)} type='email' placeholder='Enter email'/>
                    <Form.Text className='text-muted'>We`ll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group controlId='fromBasicTextArea'>
                    <Form.Label>Please, write anything...</Form.Label>
                    {(textareaDirty && textareaError) && <div style={{color:"red"}}>{textareaError}</div>}
                    <Form.Control as='textarea' rows={3} onChange={e => textareaHandler(e)} name='password' value={textarea} onBlur={e => blurHandler(e)} placeholder='Enter email'/>
                </Form.Group>
                <Form.Group controlId='fromBasicCheckbox'>
                    <Form.Check type='checkbox' label='Check me out'/>
                </Form.Group>
                <Button disabled={!formValid} variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    </Container>
  )
}