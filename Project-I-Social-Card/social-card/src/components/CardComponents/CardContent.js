import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content">
            <h2 className="card-title">Get started with React</h2>
            <p className="card-text">React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>
            <a href="https://reactjs.org/" className="grey-link">reactjs.org</a>
        </div>
    )
}

export default CardContent;