import React from "react";
import "./cards.css";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const CardArticles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/progetto-finalle/server/articles.php").then(function (res) {
      console.log(res);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticles;
