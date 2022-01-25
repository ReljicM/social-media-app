import { createStore, applyMiddleware } from "redux";
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../store/reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from '../firebase';

//react redux firebase config
export const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false
}

export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument(getFirebase)];

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const store = createStore(rootReducer, composedEnhancer)

  return store
}