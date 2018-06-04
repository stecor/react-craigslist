import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Gallery from "./components/Gallery"

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    //const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
        <div className="white-box">
          <section className="submenu">
            <div className="direction">
              <a href="#1" className="next">Prev</a>
              <a href="#1" className="next">Next</a>
            </div>

            <nav className="sub-links">
              <a href="#1">More Ads by User</a>
              <a href="#1">Print</a>
              <a href="#1">Share</a>
              <a href="#1">Contact Seller</a>
            </nav>
          </section>

          <section className="content-area">
            <div className="media-column">
              <Gallery />
            </div>
            <div className="details-column">
              <div className="date">Posted: Feb 28th</div>
              <h3 className="title">Black 2016 BMW</h3>
              <h4 className="price">$46,298</h4>
              <div className="more-details">
                <div className="info">
                  <label htmlFor="">Vin</label>
                  <h5>rwe7r9e87787ew87wer7e</h5>
                </div>

                <div className="info">
                  <label htmlFor="">Mileage</label>
                  <h5>345660</h5>
                </div>

                <div className="info">
                  <label htmlFor="">Transmition</label>
                  <h5>Manual</h5>
                </div>

                <div className="info">
                  <label htmlFor="">Vin</label>
                  <h5>rwe7r9e87787ew87wer7e</h5>
                </div>

                <div className="info">
                  <label htmlFor="">Mileage</label>
                  <h5>345660</h5>
                </div>

                <div className="info">
                  <label htmlFor="">Transmition</label>
                  <h5>Manual</h5>
                </div>

              </div>
              <div className="description">
                <label htmlFor="">Description</label>
                <p>Lorem ipsum dolor amet everyday carry brunch hexagon adaptogen. Enamel pin shabby chic everyday carry pug meggings locavore blog shoreditch seitan. Copper mug everyday carry pitchfork fam hexagon tote bag chartreuse air plant taiyaki. Ethical salvia taiyaki, butcher selfies freegan vape pug microdosing blog copper mug ramps bitters adaptogen. Tbh schlitz banh mi, +1 pitchfork cliche ennui. Paleo tattooed palo santo try-hard messenger bag skateboard meh wayfarers.</p>
                <p>Lorem ipsum dolor amet everyday carry brunch hexagon adaptogen. Enamel pin shabby chic everyday carry pug meggings locavore blog shoreditch seitan. Copper mug everyday carry pitchfork fam hexagon tote bag chartreuse air plant taiyaki. Ethical salvia taiyaki, butcher selfies freegan vape pug microdosing blog copper mug ramps bitters adaptogen. Tbh schlitz banh mi, +1 pitchfork cliche ennui. Paleo tattooed palo santo try-hard messenger bag skateboard meh wayfarers.</p>
                <p>Lorem ipsum dolor amet everyday carry brunch hexagon adaptogen. Enamel pin shabby chic everyday carry pug meggings locavore blog shoreditch seitan. Copper mug everyday carry pitchfork fam hexagon tote bag chartreuse air plant taiyaki. Ethical salvia taiyaki, butcher selfies freegan vape pug microdosing blog copper mug ramps bitters adaptogen. Tbh schlitz banh mi, +1 pitchfork cliche ennui. Paleo tattooed palo santo try-hard messenger bag skateboard meh wayfarers.</p>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    );
  }
}
