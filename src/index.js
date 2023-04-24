import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import CreateUser from './CreateUser.js';
import UserList from './UserList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CreateUser/> */}
    <UserList/>
  </React.StrictMode>
);
