import {setToken, getUserFromToken} from './tokenService';


const BASE_URL = 'http://localhost:3001/api/users';

function signUp(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
      })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Email already taken!');
      })
      // Parameter destructuring!
      .then(({token}) => setToken(token));
      // the above could have been written as
      //.then((token) => token.token);
    }

function getUser() {
  return getUserFromToken();
}

function logout() {

}

function login(creds) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
      })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad Credentials!');
      })
      // Parameter destructuring!
      .then(({token}) => setToken(token));
      // the above could have been written as
      //.then((token) => token.token);
}

export {
    signUp,
    getUser,
    logout,
    login
};