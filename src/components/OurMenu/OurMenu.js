import React, { Component } from "react";
import noodleimage from "../../images/restaurant-opening-68.jpeg";
import noodlemiddle from "../../images/restaurant-opening-73.jpeg";
import noodleright from "../../images/restaurant-opening-80.jpeg";

import "../../App.css";

class OurMenu extends Component {
  render() {
    return (
      <div id="OurMenu" className="background-restgreen">
        <h1 className="text-center text-restblue">Popular Menu</h1>
        <div class="card-group mt-5 px-5">
          <div class="card w-25 px-2 bg-transparent border-0">
            <img
              class="card text-white img-thumbnail"
              src={noodleimage}
              alt="Card image cap"
            />
            <div class="card-body bg-white">
              <h5 class="card-title">Noodles</h5>
              <p class="card-text">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <h5>$13</h5>
            </div>
          </div>
          <div class="card w-25 px-2 bg-transparent border-0">
            <img
              class="card text-white bg-success"
              src={noodlemiddle}
              alt="Card image cap"
            />
            <div class="card-body bg-white">
              <h5 class="card-title">Noodles</h5>
              <p class="card-text">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <h5>$13</h5>
            </div>
          </div>
          <div class="card w-25 px-2 bg-transparent border-0">
            <img
              class="card text-white bg-danger"
              src={noodleright}
              alt="Card image cap"
            />
            <div class="card-body bg-white">
              <h5 class="card-title">Noodles</h5>
              <p class="card-text">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <h5>$13</h5>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="button" class="button-blue badge rounded-pill my-4">
            SHOW MORE
          </button>
        </div>
      </div>
    );
  }
}

export default OurMenu;
