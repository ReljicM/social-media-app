import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../../firebase";
export const auth = getAuth();

export const signIn = ( credentials ) => {
    return (dispatch, getState, {useFirebase}) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const logOut = () => {
    return (dispatch, getState, {useFirebase}) => {

        const auth = getAuth();
        signOut(auth)
        .then (() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = ({ firestore, useFirebase }, newUser ) => {
    return ( dispatch, getState ) => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth,
            newUser.email,
            newUser.password
            ).then((resp) => {
                return db.collection('users').doc(resp.user.uid).set({
                    FirstName: newUser.firstName,
                    LastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0],
                    Email: newUser.email,
                    Password: newUser.password
                }).then(() => {
                    dispatch({ type: 'SIGNUP_SUCCESS'})
                }).catch((err) => {
                    dispatch({ type: 'SIGNUP_ERROR', err})
                })
            })
    }
}
export function signUpUser( {firestore}, newUser ) {
    return ( dispatch, getState ) => {

    if (newUser.password === newUser.rePassword) {
        createUserWithEmailAndPassword( auth,
            newUser.email,
            newUser.password
            ).then((userCredential) => {
                return db.collection('users').doc( userCredential.user.uid).set({
                    FirstName: newUser.firstName,
                    LastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0],
                    Email: newUser.email,
                    Password: newUser.password
                })
                
                })
                .catch((err) => {
                  dispatch({ type: 'SIGNUP_ERROR', err})
                
                });
            } else {
                dispatch({ type: 'PASSWORD_NOT_MATCHES'})
            }
    
      };
}