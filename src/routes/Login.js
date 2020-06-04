import React, {useState} from 'react';
import LoginForm from '../components/LoginForm';

function Login(props) {
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e, username, password) =>{
        setLoading(true)
        e.preventDefault();
        console.log('handleSubmit', username, password);
        setTimeout(() => {
            setLoading(false)
        }, 10000);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>You can login from here</p>
            <LoginForm loading={loading} handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;