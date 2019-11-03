import React, {useState} from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Clock from "../components/Clock"
import Calculator from "../components/calculator/Calculator"

import MyPage from "../pages/MyPage";

function Index() {
    const [name, setName] = useState("Shigasy")
    const [title, setTitle] = useState("Title")
    setTimeout(
        () => {
            setName("banana")
        }, 1000
    )

    return (
        <div>
            {name}
            <Header setTitle={setTitle} title={title}/>
            <Clock/>
            <Clock/>
            <Clock/>
            <Calculator/>
            <MyPage/>
            <Footer/>
        </div>
    );
}

export default Index;
