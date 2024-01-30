// import React from 'react';
// import { Link } from 'react-router-dom';
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(rgb(230, 230, 250), )' }}>
//             <div className="container-fluid">
//                 <div className='top'>
//                     <img className='character' src="Video/bot.jpeg" alt="Navbar Image" />
//                     <Link className="navbar-brand" to="/" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>
//                         <span>NYAAY SAHAAYAK-</span><br />
//                         <span>A LEGAL ASSISTANT</span>
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>

//                     </button>


//                 </div>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mx-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/ChatBot">SAHAAYAK</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/Features">FEATURES</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/Aboutus">ABOUTUS</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link active" aria-current="page" to="/Contactus">CONTACT US</Link>
//                         </li>

//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(rgb(230, 230, 250), )' }}>
            <div className="container-fluid">
                <div className='top'>
                    <img className='character' src="Video/bot.jpeg" alt="Navbar Image" />
                    <Link className="navbar-brand" to="/" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>
                        <span>NYAAY SAHAAYAK -</span><br />
                        <span>YOUR LEGAL ASSISTANT</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/ChatBot">SAHAAYAK</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Features">FEATURES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Aboutus">ABOUTUS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Contactus">CONTACT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Login">LOGIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/SignUp">SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
