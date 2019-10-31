import React, { useState } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"

function App() {
  const [name, setName] = useState("Shigasy")
  setTimeout(
      () => { setName("banana") }, 1000
  )
  const title = "Welcome emocleW!"
  return (
    <div className="App">
      {name}
      <Header title={title} />
      <Footer/>
    </div>
  );
}

export default App;
