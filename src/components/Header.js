import React from 'react';

export default function Header() {
  return (
    <header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner container text-white">
          <div className="row">
            <h2 className="display-4">
              <strong>Great Shoes</strong>
            </h2>
            <div className="col-lg-12 d-none d-lg-block">
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  tempore iusto in minima facere dolorem!
                </div>
              </div>

              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                  tempore iusto in minima facere dolorem!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
