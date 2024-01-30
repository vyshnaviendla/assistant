// Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <>
    
    <div style={{height:'400px'}} id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="1200">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div style={{ objectFit: 'cover', height: '400px' }} className="carousel-inner">
          <div className="carousel-item active">
            <img  style={{ height:'400px' , objectFit:'cover'}} className="d-block w-100" src="ci2.jpg" alt="First slide" />
            <div className="carousel-caption d-none d-md-block text-left align-items-center d-flex h-100">
              <h2 style={{marginTop:'100px'}}>CONSULTATION</h2>
              <p style={{color:'white'}}>Consult legal-aid providers &rarr;</p>

            </div>
          </div>
          <div className="carousel-item">
            <img style={{ height:'400px' , objectFit:'cover'}} className="d-block w-100" src="ci2.jpg" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block text-left align-items-center d-flex h-100">
              <h2 style={{marginTop:'100px'}}>KNOW YOUR RIGHTS</h2>
              <p style={{color:'white'}}>As a citizen of India know what are your lega rights! &rarr;</p>

            </div>
          </div>
          <div className="carousel-item">
            <img style={{ height:'400px' , objectFit:'cover'}} className="d-block w-100" src="ci2.jpg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block text-left align-items-center d-flex h-100">
              <h2 style={{marginTop:'100px'}}>LEGAL-WRITINGS</h2>
              <p style={{marginRight:'700px',color:'white'}}>Explore insightful legal writings covering diverse topics, providing clarity and understanding on complex legal matters for informed decisions &rarr;</p>

            </div>
          </div>
          <div className="carousel-item">
            <img style={{ height:'400px' , objectFit:'cover'}} className="d-block w-100" src="ci2.jpg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block text-left align-items-center d-flex h-100">
              <h2 style={{marginTop:'100px'}}>Drafting Legal Documents</h2>
              <p style={{marginRight:'700px',color:'white'}}>How to Draft Legal Documents? Step By Step Guide &rarr;</p>

            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    
    </>
  )
}
 
export default Features;