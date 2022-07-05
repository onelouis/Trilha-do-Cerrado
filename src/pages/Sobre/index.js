
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './index.css'


function Home () {
    return (
    <div>
        <div>
        <Header/>
        </div>
        <div>
        <Main />
        </div>
        <Footer />
    </div>
    );
}

export default Home;