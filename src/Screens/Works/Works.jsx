import React from 'react';
import { Col, Row } from 'reactstrap';
import SliderComponent from '../../Components/Slider/Slider';
import styles from './Works.module.scss';
import { Animated } from 'react-animated-css';

const Works = () => {
  let imgArr = [
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
    'Assets/slideImg1.png',
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
            animationIn='animate__fadeInUpBig'
            animationOut='animate__fadeInUpBig'
          >
            <div className={styles.joining}>
              <div>
                <h1>
                  HOW TO <span>JOIN US ?</span>
                </h1>
              </div>
              <div>
                <p>
                  Join our Discord server and keep engage in general channel
                  you will have a chance to get wl or og for free Mint out
                  high wuality art work this is amazing !! isn't it ?.
                </p>
              </div>
              <div>
                <p>
                  We are spreading mental awareness in a new and different way,
                  join us to make a difference in this world
                </p>
              </div>
              <div>
                <p>We are Chaotic wolves  but we are not chaotic</p>
              </div>
              <div>
                <a href="https://discord.gg/BkDevbhgYu">
                  <button>
                    <span>JOIN  DISCORD</span>
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
