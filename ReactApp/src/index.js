import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import StoreContext from './redux/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
}
rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree)

store.subscribe(() => {
rerenderEntireTree(store.getState());
})

// reportWebVitals();
