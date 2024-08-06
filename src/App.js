import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <div className="App">
       <Sidebar />
       <div className="AppClass">
          <Dashboard />
        </div>
    </div>
  );
}

export default App;
