import React, { Component } from "react";
//import ReactDOM from "react-dom";

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loopItems = () =>{
    let testArray = [1,2,3,4,5,6,7];

    return testArray.map((item,index) => {

      return(
        <div className="item" key={index}>
          <div className="image">
            <div className="price">$8900</div>
            image
          </div>
          <div className="details">
            <h5>2011 Bmw m3</h5><i className="far fa-star" ></i><i className="material-icons ma-clear">&#xE14C;</i>
            <h5>Gray on sale</h5>
            <h6>Ridgewood</h6>
          </div>
        </div>
      )
    })
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label htmlFor="price">Price</label>
              <div className="min-max">
                <select name="min-price" className="min-price">
                  <option value="0">0</option>
                </select>
                <select name="max-price" className="max-price">
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>

            <div className="form-group make">
              <label htmlFor="make">Make</label>
              <select name="make" className="make">
                <option value="bmw">bmw</option>
              </select>
            </div>

            <div className="form-group model">
              <label htmlFor="model">Model</label>
              <select name="model" className="model">
                <option value="bmw">bmw</option>
              </select>
            </div>

            <div className="form-group miles">
              <label htmlFor="miles">Miles from zip</label>
              <select name="miles" className="model">
                <option value="bmw">bmw</option>
              </select>
            </div>

            <div className="form-group button">
              <div className="primary-btn">Update</div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>

        <section id="list-view">
          <div className="container">
          <div className="white-box">
            <section className="change-view">
              <div className="form-group view-dropdown">
                <select name="select-view" className="select-view">
                  <option value="gallery">Gallery View</option>
                  <option value="list">List View</option>
                  <option value="thumb">Thumb View</option>
                </select>
              </div>

              <div className="form-group sort-dropdown">
                <select name="sort-dropdown" className="sort-dropdown">
                  <option value="newest">Newest</option>
                </select>
              </div>
            </section>

            <section className="all-items">

              {this.loopItems()}

            </section>
          </div>
          </div>
        </section>
      </div>
    );
  }
}
