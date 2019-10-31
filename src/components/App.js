import React, { useState } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"

function App() {
  const [name, setName] = useState("Shigasy")
  setTimeout(
      () => { setName("banana") }, 1000
  )
  return (
    <div className="App">
      {name}
      <Header />
      <Footer/>
    </div>
  );
}

export default App;
