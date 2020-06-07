import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';

function App() {
    return (
        <div className="container">
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/faq' component={FAQ} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </div>
    );
}

export default App;




const About = () => {
    return (<h1>About</h1>)
}

const FAQ = () => {
    return (<h1>FAQ</h1>)
}

const NavBar = () => {
    return (<ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
    </ul>)
}
