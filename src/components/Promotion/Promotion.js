import React, { Component } from "react";
import rsopen58 from "../../images/restaurant-opening-58.jpeg";
import rsopen51 from "../../images/restaurant-opening-51.jpeg";
import "./Promotion.css";
// import "../../App.css";

class Promotion extends Component {
  render() {
    return (
      <div id="Promo">
        <div className="container-fluid nopadding">
          <div className="row nopadding">
            <div className="col-6 nopadding">
              <img src={rsopen58} className="img-fluid" />
            </div>
            <div className="col-6 d-flex align-items-center promo-background">
              <div className="px-5">
                <h2>Discount up to 50% All Menu</h2>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <button
                  type="button"
                  class="button-blue badge rounded-pill my-4"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          <div className="row nopadding">
            <div className="col-6 d-flex align-items-center promo-background">
              <div className="px-5">
                <h2>Discount up to 50% All Menu</h2>
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
                <button
                  type="button"
                  class="button-blue badge rounded-pill my-4"
                >
                  READ MORE
                </button>
              </div>
            </div>
            <div className="col-6 nopadding">
              <img src={rsopen51} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promotion;
