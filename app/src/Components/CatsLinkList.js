import React from "react";
import Link from "./Link";

const CatsLinkList = ({ cats }) => {
  return (
      <div className="imageContainer">
              {cats &&
              cats.map((cat) => {
                  return (
                      <div>
                          <h2>Images</h2>
                          <div className="card">
                              <img
                                  src={cat.photoUrl}
                                  alt="Avatar"
                              ></img>
                              <div className="container">
                                  <h4>
                                      <b>Jane Doe</b>
                                  </h4>
                                  <p>Interior Designer</p>
                              </div>
                          </div>
                      </div>
                  )
              })}
      </div>
  );
};

export default CatsLinkList;
