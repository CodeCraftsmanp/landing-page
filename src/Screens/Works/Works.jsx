import React from "react";
import { Col, Row } from "reactstrap";
import SliderComponent from "../../Components/Slider/Slider";
import styles from "./Works.module.scss";
import { Animated } from "react-animated-css";

const Works = () => {
  let imgArr = [
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
    "Assets/slideImg1.png",
  ];
  return (
    <div className={styles.main_works} id="works">
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.works_head}>
            <h2>
              WOl<span>ves</span>
            </h2>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <SliderComponent imgs={imgArr} />
        </Col>
        <Col sm={12} md={12}>
          <Animated
            isVisible={true}
            animationIn="animate__fadeInUpBig"
            animationOut="animate__fadeInUpBig"
          >
            <div className={styles.joining}>
              <div>
                <h1>
                  HOW TO <span>JOIN US?</span>
                </h1>
              </div>
              <div>
                <p>
                  Follow us on Twitter and engage with our tweets. You'll have a chance
                  to get whitelisted or become an OG for our high-quality artwork.
                  This is amazing!! Isn't it?
                </p>
              </div>
              <div>
                <p>
                  We are spreading mental health awareness in a new and different way.
                  Join us to make a difference in this world.
                </p>
              </div>
              <div>
                <p>We are Fractal Wolves</p>
              </div>
              <div>
                <a href="https://x.com/Fractal_wolves">
                  <button>
                    <span>FOLLOW ON TWITTER</span>
                  </button>
                </a>
              </div>
            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default Works;
