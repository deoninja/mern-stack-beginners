import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;

 
