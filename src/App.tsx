import * as React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileView from './views/users/profileView';
import Index from './views';



function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">About</Link>
      </div>
      <header className="App-header">
        
        <Routes>
          <Route path="/" element={Index()}/>
          <Route path="/users" element={ProfileView()}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
