import React, { Component } from "react";
//import ReactDOM from "react-dom";


export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImgs:'',
      currentImg:'',
      currentIndex: 0
    }
  }

  componentWillMount(){
    const allImgs = [
      'https://images.craigslist.org/00v0v_dN0M2PZVWg4_600x450.jpg',
      'https://images.craigslist.org/00O0O_8VQYWDTTKVb_600x450.jpg',
      'https://images.craigslist.org/00S0S_fQGpyumt2AV_600x450.jpg',
      'https://images.craigslist.org/00L0L_fxUrryiIHjf_600x450.jpg',
      'https://images.craigslist.org/00M0M_56TQo3WW1Cn_600x450.jpg',
      'https://images.craigslist.org/00606_f2hL4mPWjXA_600x450.jpg'
    ]

    this.setState({
      allImgs,
      currentImg: allImgs[this.state.currentIndex]
    })
  }

  allImgsLoop = () => {

    return this.state.allImgs.map((item, index) => {
      return(
        <div className="thumb-img" onClick={this.clickedThumb.bind(null, index)} key={index} style={{"backgroundImage": `url('${item}')`}}></div>
      )
    })
  }


  nextBtn = () => {
    if(this.state.currentIndex < (this.state.allImgs.length -1)){
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }

  }

  prevBtn = () => {
    if(this.state.currentIndex > 0){
      this.setState({

          currentIndex: this.state.currentIndex - 1
      })
    }
  }


  clickedThumb = (index) => {

    this.setState({

        currentIndex: index
    })
  }


  render() {

    //const { match, location, history } = this.props;

    return (

      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}></div>
            <div className="arrows right-arrow" onClick={this.nextBtn}></div>
            <div className="image-1"  style={{"backgroundImage":`url('${this.state.allImgs[this.state.currentIndex]}')`}}></div>
          </div>
        </div>
        <div className="thumbnails">

          {this.allImgsLoop()}

        </div>
      </div>
    );
  }
}
