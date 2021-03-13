import React from 'react';
import MenuLink from './MenuLink.js';

function Menu() {
    return (
        <div className = "menu">
            <MenuLink link="/" title="Home" isActive />
            <MenuLink link="/about" title="About" />
            <MenuLink link="/contact" title="Contact" />
            <MenuLink link="/posts" title="Posts" />
        </div>
    );
}

export { Menu };