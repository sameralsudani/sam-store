import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link to="/" className="navbar-brand">
                Sam Store
              </Link>

              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* <FaBars className="nav-icon" onClick={handleSidebar} /> */}
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/products" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      contact
                    </Link>
                  </li>

                  <li className="nav-cart ">
                    <FaCartPlus className="nav-icon " onClick={handleCart} />
                    <div className="cart-items">{cartItems}</div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--primaryColor);
  border-bottom: 3px solid var(--mainGrey);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--mainGrey);
    color: var(--primaryColor);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

{
  /* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container">
    <a href="index.html" className="navbar-brand">
      Glozzom
    </a>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a href="index.html" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="about.html" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="services.html" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="blog.html" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="contact.html" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>; */
}
