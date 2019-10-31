import React, { useState } from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"

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
      <Footer/>
    </div>
  );
}

export default App;
