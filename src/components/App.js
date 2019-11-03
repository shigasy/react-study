import React, { useState } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Clock from "./Clock"
import Calculator from "./calculator/Calculator"

function App() {
  const [name, setName] = useState("Shigasy")
  const [title, setTitle] = useState("Title")
  setTimeout(
      () => { setName("banana") }, 1000
  )

  return (
    <div className="App">
      {name}
      <Header setTitle={setTitle} title={title} />
      <Clock/>
      <Clock/>
      <Clock/>
      <Calculator />
      <Footer/>
    </div>
  );
}

export default App;
