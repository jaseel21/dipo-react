import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Context, { FirebaseContext } from './store/FirebaseContext';
import  firebase  from './firebase/config';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{firebase}}>
        <BrowserRouter>
        <Context>

         <App />
        </Context>
        </BrowserRouter>

    </FirebaseContext.Provider>
);

