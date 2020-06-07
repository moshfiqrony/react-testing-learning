import React, {useEffect, useState, Fragment} from 'react';
import {getUsers} from '../api/index';


const Home = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers()
        .then(res => setUsers(res))
    })

    if(users){
        return (<Fragment>
            <table className='table border'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UUID</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return(<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.data().id}</td>
                            <td>{user.data().username}</td>
                            <td>{user.data().email}</td>
                            <td>{user.data().password}</td>
                            <td><button className='btn btn-danger'>DELETE</button></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </Fragment>)
    }else{
        return 'loading'
    }
}

export default Home