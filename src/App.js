import React, { Component } from "react";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.jpg";
import video from "./images/video1.mp4";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="2000">
              <img src={image1} alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-white">INI TITLE</h1>
                <h4>INI KETERANGANNYA</h4>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src={image2} alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-white">INI TITLE</h1>
                <h4>INI KETERANGANNYA</h4>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src={image3} alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-white">INI TITLE</h1>
                <h4>INI KETERANGANNYA</h4>
              </div>
            </div>
            <div class="carousel-item" data-interval="2000">
              <iframe
                src="https://www.youtube.com/embed/uYDZ-eS1OJk"
                width="1920px"
                height="1080px"
                frameborder="0"
              ></iframe>
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-white">INI TITLE</h1>
                <h4>INI KETERANGANNYA</h4>
              </div>
            </div>
            <div class="carousel-item" id="vid_wrapper" data-interval="10000">
              <video id="video" class="wrapper_video" muted>
                <source src={video} type="video/mp4" />
                Video or codec not supported.
              </video>
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-white">INI TITLE</h1>
                <h4>INI KETERANGANNYA</h4>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
