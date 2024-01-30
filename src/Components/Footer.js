import React from 'react';

function Footer() {
    const headingStyle = {
        color: 'Black' // Set the text color to white
    };
    return (
        <footer className="container">
            <p style={headingStyle}>&copy; 2017-2023 Company, Inc. - <a href="#">Privacy</a> - <a href="#">Terms</a></p>
        </footer>
    );
}

export default Footer;