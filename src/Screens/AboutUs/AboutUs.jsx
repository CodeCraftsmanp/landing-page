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
                At <strong>'Fractal Wolves'</strong>, we are more than an NFT project—we are a movement inspired by the fractal intricacies of nature and the untamed spirit of wolves. Our journey began with a desire to merge the unpredictable beauty of the wild with cutting-edge blockchain technology. The essence of fractals and freedom runs deep in our collection, making every artwork a symbol of both primal power and digital sophistication. Designed by a visionary artist, each piece in the collection captures the raw beauty and intricacy of fractal patterns. We proudly reside on the Fractal Bitcoin blockchain, offering a limited, exclusive collection of 999 high-quality tokens that reflects the timeless connection between wolves and the mathematical elegance of fractals.
              </p>
            </div>

            <div>
              <h2>Fractal Wolves NFTs on <span>Fractal Bitcoin</span></h2>
              <p>
                The Fractal Wolves collection represents not just digital art, but a revolution in how art interacts with blockchain technology. Created by our talented artist, each NFT is a unique portrayal of the complexity, individuality, and primal beauty of wolves, all within the innovative framework of the Fractal Bitcoin ecosystem. What sets 'Fractal Wolves' apart is the exclusivity of our 999 NFTs—each piece tells a story through the fractal patterns it embodies. These aren’t just art pieces, but tokens of personal identity, crafted for the sophisticated crypto collector and art enthusiast who value rarity and depth.
              </p>
            </div>

            <div>
              <h2>Digital Sanctuary of Excellence on Fractal Bitcoin</h2>
              <p>
                'Fractal Wolves' is more than an NFT collection—it’s a digital sanctuary, a community built on excellence, authenticity, and artistic innovation. Our collection, carefully designed by an artist who truly understands the interplay of nature and geometry, offers a space where creativity thrives, pushing the boundaries of what can be achieved on the Fractal Bitcoin blockchain. As guardians of this digital wilderness, we invite you to join us in exploring new horizons, where every Fractal Wolf NFT stands as a testament to the limitless potential of digital art. Together, we are shaping the future of blockchain artistry—one fractal at a time.
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
