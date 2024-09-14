import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./AboutUs.module.scss";
import { Animated } from "react-animated-css";

const AboutUs = () => {
  return (
    <div className={styles.main_about} id="aboutus">
      <Row>
        <Col sm={12} md={8}>
          <Animated
            isVisible={true}
            animationIn="animate__fadeInUpBig"
            animationOut="animate__fadeInUpBig"
          >
            <div className={styles.about_content}>
              <div>
                <h1>
                 ABOUT <span>US</span>
                </h1>
                <p>
                  At 'Fractal Wolves,' our journey began with a shared passion
                  for the untamed beauty of wolves and a vision to translate
                  that raw energy into the digital realm. The mesmerizing allure
                  of these creatures inspired our artists to create a collection
                  that goes beyond conventional boundaries. Our mission is to
                  bring the spirit of the wild into the blockchain, and we're
                  proud to announce that 'Fractal Wolves' finds its home on the
                  Fractal Bitcoin blockchain. Offering a limited supply of 999
                  high-quality artworks, we aim to capture the essence of fractals
                  and freedom in this innovative and rapidly-growing blockchain
                  ecosystem.
                </p>
              </div>
              <div>
                <h2>Fractal Wolves NFTs on <span>Fractal Bitcoin</span></h2>
                <p>
                  We envision a future where each Fractal Wolf NFT becomes a
                  symbol of complexity and individuality in the vast landscape of
                  the Fractal Bitcoin blockchain art community. What sets 'Fractal Wolves'
                  apart is not only the exceptional quality of our digital
                  masterpieces but also the exclusivity of a 999-piece
                  collection. Each artwork tells a unique story, reflecting the
                  fractal beauty of the wolf, meticulously crafted to resonate
                  with art enthusiasts and crypto collectors on the Fractal
                  Bitcoin network.
                </p>
              </div>
              <div>
                <h2>Digital Sanctuary of Excellence on Fractal Bitcoin</h2>
                <p>
                  As stewards of this digital wilderness, we take pride in our
                  commitment to excellence and authenticity. 'Fractal Wolves' is
                  not just an NFT collection; it's a sanctuary for those who
                  seek extraordinary, high-quality digital art. Join us in
                  unleashing the power of fractals as we redefine the boundaries
                  of digital creativity on the Fractal Bitcoin blockchain and usher in a
                  new era of blockchain artistry.
                </p>
              </div>
            </div>
          </Animated>
        </Col>
        <Col sm={12} md={4}>
          <Animated
            animationIn="animate__backInUp"
            animationOut="animate__backInUp"
            isVisible={true}
          >
            <div className={styles.sideBear}>
              <img src="Assets/sidebear.png" alt="sidebear" />
            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
