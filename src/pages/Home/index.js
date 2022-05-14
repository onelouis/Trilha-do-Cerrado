import React from "react";
import Header from "./components/Header";
import './index.css'


function Home () {
    return (
    <div>
        <Header/>
        <main className="main"> 
        <div className="feed"> 
                feed 
        </div>
        </main>
    </div>
    );
}

export default Home;