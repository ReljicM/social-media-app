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

export const updatePost = ({firestore}, id, post) => {

    return (dispatch, getState ) => {
        
        db
        .collection('posts')
        .doc(id)
        .update({
            ...post,
            content: post.updateContent,
            updateAt: new Date()
        })
        .then(() => {
            dispatch({ type: 'UPDATE_POST', id })
        }).catch((err) => {
            dispatch({ type: 'UPDATE_POST_ERROR', err})
        })
    }
};

export const deletePost = ({firestore}, id) => {

    return (dispatch, getState ) => {
        db
        .collection('posts')
        .doc(id)
        .delete()
        .then(() => {
            dispatch({ type: 'DELETE_POST', id })
        }).catch((err) => {
            dispatch({ type: 'DELETE_POST_ERROR', err})
        })
    }
};