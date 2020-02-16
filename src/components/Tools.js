import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';

const Tools = ({setAlert, register, user}) => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const { name, email, phone, password, passwordConfirm } = formData;

    // only accept numbers as input for the user's phone number
    const fitPhoneNum = phoneNum => {
        let newPhoneNum = '';
        for (let i = 0; i < Math.min(phoneNum.length, 12); i++) {
            if (i === 3 || i === 7) {
                newPhoneNum += ' '; 
            }
            const code = phoneNum.charCodeAt(i);
            if (code <= 57 && code >= 48) {
                newPhoneNum += phoneNum.charAt(i);
            }
        }
        return newPhoneNum;
    }

    const onChange = e => {
        if (e.target.name === 'phone') {
            e.target.value = fitPhoneNum(e.target.value);
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (name === '' || email === '' || password === '' || passwordConfirm === '') {
            setAlert('Please provide complete registration information', 'danger')
        } else if (password !== passwordConfirm) {
            setAlert('Please provide matching passwords', 'danger')
        } else {
            register({name, phone, email, password});
        }
    }

    if (user) {
        return <Redirect to="/processtext"/>
    }

    return (
        <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                    Register
                </p>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="What's your name?" defaultValue={name} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="phone" type="text" placeholder="What's your phone number?" defaultValue={phone} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="What's your email?" defaultValue={email} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="What's your password?" defaultValue={password} onChange={onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="passwordConfirm" type="password" placeholder="Confirm your password" defaultValue={passwordConfirm} onChange={onChange} />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

Tools.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}

export default Tools
