import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <a className="navbar-brand rotulo" href="#">
                    Navbar
                  </a>
                  <a className="navbar-brand subtitle" href="#">
                    Home
                  </a>
                  <a className="navbar-brand subtitle" href="#">
                    Articoli
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center mt-4">
          <h1>Welcome to This Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center mt-3">
          <h5>Scroll to read our API articles</h5>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
