import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-3">Síguenos en Instagram</p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger rounded-circle p-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram"
            className="img-fluid"
            style={{ width: '40px', height: '40px' }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;