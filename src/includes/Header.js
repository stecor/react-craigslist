import React, { Component } from "react";
//import ReactDOM from "react-dom";
import axios from "axios";
import {Link} from 'react-router-dom'

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      cityDropdown: false,
      selectedCity: 'New York City',
      citiesData: []
    };
  }

componentWillMount(){

  const self = this;
  axios.get(`/api/cities`)
  .then(function (response) {
    const{match} = self.props;
    //const{match, history} = self.props;
    let city = response.data.filter((item)=>{
      return item.slug === match.params.city
    })
    self.setState({
      citiesData: response.data,
      selectedCity: city[0].title
    }, () =>{
      document.body.style.backgroundImage =`linear-gradient(135deg, rgba(75,52,247,0.8)0% rgba(166,39,230,0.8)100%),url(${city[0].img})`
      //console.log(self.state);
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}

  clickedCityDropdown = () => {
    this.setState({
      cityDropdown: !this.state.cityDropdown
    })
  };

selectCity =(city)=>{
  this.setState({
    selectedCity: city
  }, () =>{

    let city = this.state.citiesData.filter((item)=>{
      return item.title === this.state.selectedCity
    })
    //const{match, history} = this.props;
    const{history} = this.props;

      history.push(`/${city[0].slug}`);

  })

}

loopCities = () => {
  //const self = this;
  return this.state.citiesData.map((item, index) => {
    return(
      <li key={index} onClick = {this.selectCity.bind(null,item.title)}>{item.title}</li>

    )
  })
}


  render() {
    const{match} = this.props
    return (
    <div className="container">
      <header>

        <div className={"left-menu"}>
          <Link to={`/${match.params.city}`} className={"logo"}>Craigslist</Link>
          <div className={"city-dropdown"} onClick={this.clickedCityDropdown}>
            {this.state.selectedCity}
            <i className={`fas fa-chevron-down ${(this.state.cityDropdown) ? 'fa-chevron-up': 'fa-chevron-down'}`} />
            <div className={`scroll-area ${(this.state.cityDropdown) ? 'active': ''}`}>
              <ul>
                {this.loopCities()}
              </ul>
            </div>
          </div>
        </div>

        <div className={"right-menu"}>
          <div className={"user-img"}><i className={"far fa-user"}></i></div>
          <div className={"user-dropdown"}>
            my account <i className={"fas fa-chevron-down"} />
          </div>
          <div className={"post-btn"}>post to classifieds</div>
        </div>

      </header>
    </div>
    );
  }
}
