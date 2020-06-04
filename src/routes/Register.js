import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

function Register(props) {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e, username, password, email) => {
        setLoading(true)
        e.preventDefault();
        console.log('handleSubmit', username, password, email);
        setTimeout(() => {
            setLoading(false)
        }, 10000);
    }

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