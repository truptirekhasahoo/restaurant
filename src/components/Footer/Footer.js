import React, { Component } from "react";
import "../../App.css";
import "./Footer.css";
import footercurv from "../../images/footer-curv.png";
import fb from "../../images/fb.svg";
import tw from "../../images/twitter.svg";
import insta from "../../images/insta.svg";

class Footer extends Component {
  render() {
    return (
      <div
        className="container-fluid nopadding mx-0 "
        style={{ "background-image": "none" }}
      >
        <div className="row nopadding">
          <div className="rest-footerthumbnail text-center nopadding">
            <img src={footercurv} className="img-responsive w-100" />
            <div className="rest-footercaption">
              <p className="text-restblue h5 px-5 my-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
              <h3 className="text-restblue my-5">Agus Waiters</h3>
              <a
                className="btn-floating m-1"
                href="www.facebook.com"
                role="button"
              >
                <img
                  className="rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                  src={fb}
                />
              </a>
              <a className="btn-floating m-1" href="#!" role="button">
                <img
                  className="rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                  src={tw}
                />
              </a>
              <a className="btn-floating m-1" href="#!" role="button">
                <img
                  className="rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                  src={insta}
                />
              </a>
            </div>
          </div>
        </div>
        <div class="row text-left nopadding">
          <div class="col-6 text-white ">
            <h5>ABOUT</h5>
            <p className="text-white text-wrap">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
          <div class="col-2 text-white">
            <h5>ABOUT</h5>
            <label className="text-white">Team</label>
            <br />
            <label className="text-white">Join us</label>
            <br />
            <label className="text-white">Ethic</label>
            <br />
            <label className="text-white">Goals</label>
          </div>
          <div class="col-2 text-white">
            <h5>ABOUT</h5>
            <label className="text-white">Team</label>
            <br />
            <label className="text-white">Join us</label>
            <br />
            <label className="text-white">Ethic</label>
            <br />
            <label className="text-white">Goals</label>
          </div>
          <div class="col-2 text-white">
            <h5>ABOUT</h5>
            <label className="text-white">Team</label>
            <br />
            <label className="text-white">Join us</label>
            <br />
            <label className="text-white">Ethic</label>
            <br />
            <label className="text-white">Goals</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
