import React, { Component } from "react";
import OneImage from "../../images/restaurant-opening-40.jpeg";
import TwoImage from "../../images/restaurant-opening-44.jpeg";
import ThreeImage from "../../images/restaurant-opening-48.jpeg";
import DeliveryImage from "../../images/restaurant-opening-28.jpeg";
import "../../App.css";

class Order extends Component {
  render() {
    return (
      <div
        id="Order"
        className="container-flex text-white text-center my-5 overflow-hidden"
      >
        <br />
        <br />
        <div className="row">
          <div className="col-12">
            <h2>HOW TO ORDER</h2>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-4">
            <img className="rounded-circle px-2" src={OneImage} />
            <h5 className="card-title">Order</h5>
            <p className="card-text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <div className="col-4">
            <img className="rounded-circle px-2" src={TwoImage} />
            <h5 className="card-title">Choose Menu</h5>
            <p className="card-text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <div className="col-4">
            <img className="rounded-circle px-2" src={ThreeImage} />
            <h5 className="card-title">Delivery</h5>
            <p className="card-text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="restthumbnail text-center nopadding">
            <img src={DeliveryImage} className="img-responsive" />
            <div className="restcaption text-restblue">
              <h1>Free Delivery</h1>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <button
                type="button"
                className="button-blue badge rounded-pill my-4"
              >
                GET VOUCHER
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
