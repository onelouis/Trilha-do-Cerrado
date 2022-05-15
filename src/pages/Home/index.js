import React from "react";
import Header from "./Header";
import './index.css'


function Home () {
    return (
    <div>
        <div>
        <Header/>
        </div>
        
        <main className="main"> 
            <div className="feed"> 
                feed 
            </div>
        </main>
        <footer > footer</footer>
    </div>
    );
}

export default Home;