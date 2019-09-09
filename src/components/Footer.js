import React from 'react';

import { ProductConsumer } from '../context';

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <footer id="main-footer" className="bg-dark text-white">
            <div className="container">
              <div className="row">
                <div className="col text-center py-4">
                  <p className="text-capitalize">
                    copyright &copy; sam store {new Date().getFullYear()}{' '}
                  </p>
                </div>
                {/* <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(item => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div> */}
              </div>
            </div>
          </footer>
        );
      }}
    </ProductConsumer>
  );
}
