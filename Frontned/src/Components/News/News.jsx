import React from "react";
import './News.css';

const News =() =>{
    return(
        <div className="news">
            <h1>Get Exclusive Offers On Your Mail ID</h1>
            <p>Subscribe to our site and stay updated</p>
            <div>
                <input type="email" placeholder="your email id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default News   