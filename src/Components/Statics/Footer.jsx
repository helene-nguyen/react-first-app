import React from 'react';

const thisYear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <h2> Copyright © {thisYear} Yumicode </h2>
        </footer>
    )
}

export default Footer;