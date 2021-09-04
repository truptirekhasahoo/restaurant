import React, { Component } from "react";
import Navbar from "../NavBar/NavBar";
import OurMenu from "../OurMenu/OurMenu";
import Promotion from "../Promotion/Promotion";
import Order from "../Order/Order";
import FooterPage from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div data-spy="scroll" data-target="#navbar-main" data-offset="0">
          <div id="" className="container">
            <div className="row">
              <div className="col-12">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col-1y2">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col-12">&nbsp;</div>
            </div>
            <div className="row">
              <div class="col-3"></div>
              <div class="col-6">
                <h1 class="text-center text-white fw-bold">
                  Healthy food
                  <br />
                  Restaurant
                </h1>
                <p className="text-center text-white text-wrap">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </div>
              <div class="col-3"></div>
            </div>
          </div>
          <OurMenu />
          <Promotion />
          <Order />
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default Home;
