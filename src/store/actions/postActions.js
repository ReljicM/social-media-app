import { db } from "../../firebase";


export const createPost = ({ firestore }, post ) => {
    
    
    return ( dispatch, getState ) => {
        
        console.log(getState)
        const profile = getState().firebase.profile
        const authId = getState().firebase.auth
        db
        .collection('posts')
        .add({
            ...post,
            authorFirstName: profile.FirstName,
            authorLastName: profile.LastName,
            authorId: authId.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err })
        })
        
        
    }
};