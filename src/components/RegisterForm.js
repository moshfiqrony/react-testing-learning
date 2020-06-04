import { Button, Input, Spin } from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import React, { useState } from 'react';

function Form(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <form
            onSubmit={(e) => props.handleSubmit(e, username, password, email)}
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
                                name='email'
                                required
                                type='email'
                                size='large'
                                value={email}
                                placeholder='Enter your email'
                                onChange={(event) => setEmail(event.target.value)}
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
                                size='large'
                            >
                                {props.loading ? <Spin indicator={<LoadingOutlined style={{color: '#fff'}} />}/> : 'REGISTER'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;