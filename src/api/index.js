import {v4 as uuidv4} from 'uuid'
import fire from '../Firebase';
const db = fire.firestore();


export const createUser = async(username, password, email) => {
    return new Promise(resolve => {
        let data = {
            id: uuidv4(),
            username: username,
            password: password,
            email: email,
            status: 200
        }
        db.collection('users')
        .add(data)
        .then(result => {
            resolve(data)
        })
        .catch(errr => console.log(errr))
    })
}


export const getUsers = () => {
    return new Promise(async resolve => {
        let data = await db.collection('users').get();
        let myUsers = []
        data.docs.map(doc => {
            console.log(doc.data().username)
			myUsers.push(doc)
		})
        resolve(myUsers);
    })
}