import foto1 from '../assets/img/foto1.png';
import foto2 from '../assets/img/foto2.png';
import foto3 from '../assets/img/foto3.png';
import foto4 from '../assets/img/foto4.png';
import foto5 from '../assets/img/foto5.png';
import foto6 from '../assets/img/foto6.png';
import foto7 from '../assets/img/foto7.png';
import foto8 from '../assets/img/foto8.png';
import foto10 from '../assets/img/foto10.png';
import foto11 from '../assets/img/foto11.png';
import foto12 from '../assets/img/foto12.png';
import foto9 from '../assets/img/postman.png'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Tools = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="tools">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technologies and tools</h2>
              <p>
                In this section you will find the technologies and tools that I
                have learned along my way in this exciting world.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={foto1} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={foto2} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={foto3} alt="JAVASCRIPT" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={foto4} alt="REACT" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={foto5} alt="MONGODB" />
                  <h5>MONGODB</h5>
                </div>
                <div className="item">
                  <img src={foto6} alt="NODEJS" />
                  <h5>NODEJS</h5>
                </div>
                <div className="item">
                  <img src={foto7} alt="GIT" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={foto8} alt="FIREBASE" />
                  <h5>FIREBASE</h5>
                </div>
                <div className="item">
                  <img src={foto9} alt="POSTMAN" />
                  <h5>POSTMAN</h5>
                </div>
                <div className="item">
                  <img src={foto10} alt="JEST" />
                  <h5>JEST</h5>
                </div>
                <div className="item">
                  <img src={foto11} alt="NPM" />
                  <h5>NPM</h5>
                </div>
                <div className="item">
                  <img src={foto12} alt="GITHUB" />
                  <h5>GITHUB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
