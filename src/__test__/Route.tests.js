// import React from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import { createMemoryHistory } from 'history'
// import '@testing-library/jest-dom/extend-expect'
// import { Router } from 'react-router-dom'
// import App from '../App';





// test(
//     'login button click test',
//     () => {
//         const history = createMemoryHistory()
//         const { container, getByRole, getByText } = render(
//             <Router history={history}>
//               <App />
//             </Router>
//           )
//         expect(getByRole('heading').textContent).toBe('Home')


//         // going to the login page now
//         fireEvent.click(getByText("Login"))
//         expect(getByRole('heading').textContent).toMatch('Login Page')

        
//         const form = container.querySelector('form')
//         const {username, password} = form.elements
//     }
// )