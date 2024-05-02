import React from "react";
import "./cards.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CardArticles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/progetto-finalle/server/articles.php").then(function (res) {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="container">
      {posts.map(function (val) {
        return (
          <div className="row">
            <div className="col-12 mt-4">
              <div className="card">
                <img src={val.imagem} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.conteudo}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardArticles;
