import React from 'react';
import MenuLink from './MenuLink.js';

function Menu() {
    return (
        <Menu>
            <MenuLink link="/" title="Home" isActive />
            <MenuLink link="/about" title="About" />
            <MenuLink link="/contact" title="Contact" />
            <MenuLink link="/posts" title="Posts" />
        </Menu>
    );
}

export { Menu };