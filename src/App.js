import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Index from "./pages/Index"
import MyPage from "./pages/MyPage";


function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <ul>
                  <li><Link to="/">Index</Link></li>
                  <li><Link to="/my-page">MyPage</Link></li>
              </ul>
              <Route exact path='/' component={Index} />
              <Route path='/my-page' component={MyPage} />
          </div>
      </BrowserRouter>
  );
}

export default App;
