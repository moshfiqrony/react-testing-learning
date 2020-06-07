// import React from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import { createMemoryHistory } from 'history'
// import '@testing-library/jest-dom/extend-expect'
// import { Router } from 'react-router-dom'
// import App from '../App';





// test(
//     'Register button click test',
//     async() => {
//         const history = createMemoryHistory()
//         history.push('/register')
//         const { container, getByRole, getByText } = render(
//             <Router history={history}>
//               <App />
//             </Router>
//           )

//         expect(getByRole('heading').textContent).toMatch('Register Page')


//         //access the registration form
//         const form = container.querySelector('form')
//         const {username, password, email} = form.elements
        
//         username.value = 'moshfiqrony'
//         password.value = 'moshfiqrony'
//         email.value = 'moshfiqrony@rmail.com'

//         const submit = new window.Event('submit')
//         form.dispatchEvent(submit)
//         expect(history.location.pathname).toBe('/login')
//     }
// )