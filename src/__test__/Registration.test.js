import React from 'react'
import ReactDOM from 'react-dom'
import RegisterForm from '../routes/Register';
import * as apiMock from '../api/index';

jest.mock('../api/index.js', () => {
  return{
    createUser: jest.fn((username, password, email) => Promise.resolve({status: 200}))
  }
})

const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  })
}


test(
    'success register click',
    async() => {
        const container = document.createElement('div');
        const fakeHistory = {
          push: jest.fn()
        }
        const fakeUser = {
          username: 'moshfiqrony',
          password: '123342',
          email: 'moshfiqron@fama.com'
        }
        ReactDOM.render(<RegisterForm history={fakeHistory}/>, container)

        const fakeEvent = {
          preventDefault: jest.fn()
        }
        
        const form = container.querySelector('form')
        const{username, password, email} = form.elements
        username.value = fakeUser.username
        password.value = fakeUser.password
        email.value = fakeUser.email

        const submit = new window.Event('submit')
        form.dispatchEvent(submit)

        await flushPromises();

        expect(apiMock.createUser).toHaveBeenCalledTimes(1);
        expect(fakeHistory.push).toHaveBeenCalledTimes(1);
        expect(apiMock.createUser).toHaveBeenCalledWith(fakeUser.username, fakeUser.password, fakeUser.email)
    }
)

test(
  'Unsuccess register click',
  async() => {
      const container = document.createElement('div');
      const fakeHistory = {
        push: jest.fn()
      }
      ReactDOM.render(<RegisterForm history={fakeHistory}/>, container)

      const fakeEvent = {
        preventDefault: jest.fn()
      }
      
      const form = container.querySelector('form')
      const{username, password, email} = form.elements
      username.value = ''
      password.value = ''
      email.value = ''

      const submit = new window.Event('submit')
      form.dispatchEvent(submit)

      expect(fakeHistory.push).toHaveBeenCalledWith('/register')
  }
)