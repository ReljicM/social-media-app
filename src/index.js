import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import firebase from "./firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { configureStore, rrfConfig } from './store/configureStore';


import { isLoaded } from "react-redux-firebase"
import { useSelector} from "react-redux"
const store = configureStore();

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

  ReactDOM.render(
  
    <React.StrictMode>
      <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rrfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
       
       >
        <Provider store={store}>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </Provider>
      </ReactReduxFirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

