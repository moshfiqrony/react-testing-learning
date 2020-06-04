import React from 'react';
import LoginForm from '../components/LoginForm';

function Login(props) {

    const handleSubmit = (e, username, password) =>{
        e.preventDefault();
        console.log('handleSubmit', username, password);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>You can login from here</p>
            <LoginForm handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;