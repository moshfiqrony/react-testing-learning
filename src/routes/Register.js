import React, { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';
import {createUser, getUsers} from '../api/index';


function Register(props) {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const {username, password, email} = e.target.elements;
        if(getLength(username.value) !== 0 && getLength(password.value) !== 0 && getLength(email.value) !== 0){
            createUser(username.value, password.value, email.value)
            .then(res => {
                console.log(res)
                if(res.status === 200){
                    props.history.push('/login');
                }else{
                    props.history.push('/register');
                }
            })
            
        }else{
            props.history.push('/register')
        }
    }

    const getLength = (str) => (str.trim().length)

    return (
        <div>
            <h1>Register Page</h1>
            <p>You can register from here</p>
            <RegisterForm
                loading={loading}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default Register;