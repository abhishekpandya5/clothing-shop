import React from 'react';
import { Link } from 'react-router-dom';

import './menuItem.scss';


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    return (
        <div className={`menu-item ${size}`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <Link to={linkUrl} className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </Link>
        </div>

    )
}

export default MenuItem;