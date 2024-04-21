import React from 'react';

function Aboutus() {
  return (
    <section className="hero">
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="container-aboutus">
        <div className="hero-content">
          <h2>Welcome To Our Website</h2>
          <p>
            Welcome to our website, a dedicated platform for all your legal needs. We are a team of experienced legal assistants, committed to providing you with the best legal services possible. Our team is composed of professionals who have extensive knowledge and experience in various areas of law, ensuring that you receive the most accurate and up-to-date advice.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img
            src="https://t3.ftcdn.net/jpg/05/75/22/58/360_F_575225818_PQ2ZPHFw51yCcmieutB5bT843nPAPzo3.jpg"
            alt="About Us Image"
          />
        </div>
      </div>
      <div className="container-aboutus">
        <div className="hero-image">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/979218175648835.Y3JvcCwzNDA5LDI2NjcsMjk1LDA.jpg"
            alt="About Us Image"
          />
        </div>
        <div className="hero-content">

          <p>
            At our website, we understand that navigating the legal landscape can be challenging. That's why we are here to guide you through the process, helping you understand the law and the legal system. We provide comprehensive legal services, including legal research, drafting and proofreading legal documents, managing client billing and accounting, and organizing and managing documents
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      <div className="container-aboutus">
        <div className="hero-content">
          <h2>Welcome To Our Website</h2>
          <p>
            At Nyaay Sahayak, our mission is to bridge the gap between individuals and legal resources. 
            We aim to democratize legal information, making it easily understandable and accessible to everyone. 
            Whether you're dealing with legal issues, seeking advice, or simply looking to enhance your legal awareness, Nyaay Sahayak is here to assist you on your legal journey
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img
            src="https://penji.co/wp-content/uploads/2022/09/2.-prestige-law-logo.jpg"
            alt="About Us Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutus;