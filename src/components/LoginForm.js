import { Button, Input } from 'antd';
import React, { useState } from 'react';

function Form(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <form
            onSubmit={(e) => props.handleSubmit(e, username, password)}
        >
            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-4">
                    <div className="row pt-5 justify-content-center d-flex">
                        <div className="col-12 pb-4">
                            <Input
                                name='username'
                                required
                                size='large'
                                value={username}
                                placeholder='Enter your username'
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-12 pb-4">
                            <Input
                                name='password'
                                required
                                type='password'
                                size='large'
                                value={password}
                                placeholder='Enter your password'
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-12 pb-4">
                            <Button
                                style={{ width: '100%' }}
                                type='primary'
                                htmlType='submit'
                                name='submit'
                            >LOGIN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;