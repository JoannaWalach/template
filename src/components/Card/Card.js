import React from 'react';
import Avatar from 'react-avatar';
import url from "./paella.jpg";

function Card({ title, intro }) {
    return (
        <div className="card">
            <div className="header">
                <Avatar className = "avatar" name="Wim Mostmans" size = "30" round />
                <h4>{title}</h4></div>
            <img alt="aaa" src={url}></img>
            <p>{intro}</p>
        </div>
    );
}

export default Card;