import React from "react";
import LinkList from "./LinkList";

const Content = ({categories}) => {
  return (
    <div>
    <LinkList categories={categories} />
    <div class="imageContainer">
      <div >
        <h2>Images</h2>
        <div class="card">
          <img
            src="https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
            alt="Avatar"
          ></img>
          <div class="container">
            <h4>
              <b>Jane Doe</b>
            </h4>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>
      <div >
        <h2>Images</h2>
        <div class="card">
          <img
            src="https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
            alt="Avatar"
          ></img>
          <div class="container">
            <h4>
              <b>Jane Doe</b>
            </h4>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>{" "}
      <div  >
        <h2>Images</h2>
        <div class="card">
          <img
            src="https://static.independent.co.uk/2021/06/16/08/newFile-4.jpg?width=982&height=726&auto=webp&quality=75"
            alt="Avatar"
          ></img>
          <div class="container">
            <h4>
              <b>Jane Doe</b>
            </h4>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Content;
