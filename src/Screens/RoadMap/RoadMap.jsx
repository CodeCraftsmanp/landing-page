import React from 'react';
import styles from './RoadMap.module.scss';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';

const RoadMap = ({ isJoinPage = false }) => {
  return (
    <div className={styles.main_road_map} id='roadmaps'>
      <Row>
        <Col sm={12} md={12}>
          <Animated
            animationIn='animate__fadeInUp'
            animationOut='animate__fadeInUp'
            isVisible={true}
          >
            <div className={styles.road_map_head}>
              <h2>ROADMAP</h2>
              <h1>ROADMAP</h1>
            </div>
          </Animated>
        </Col>
        {isJoinPage ? (
          <Col sm={12} md={12}>
            <div className={styles.btn}>
              <button className={styles.discordBtn}>
                <span>JOIN OUR DISCORD</span>
              </button>
            </div>
          </Col>
        ) : null}
        <Col xs={2} sm={2} md={2}>
          {/* <div className={styles.circle}></div> */}
          <div className={styles.line}>
            <div className={styles.dottedline}></div>
          </div>
        </Col>
        <Col xs={10} sm={10} md={10}>
          <Animated
            animationIn='animate__fadeInUp'
            animationOut='animate__fadeInUp'
            isVisible={true}
          >
            <div className={styles.road_map_content}>
              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>Phase 1 </h1>
              </div>
              <div>
                <p>✦ Build a strong community</p>
                <p>✦ Foster an active community</p>
                <p>✦ Launch giveaways in Discord and Twitter</p>
                <p>✦ Mint 999 unique CW</p>
                <p>✦ Build a stake system for collection (Earn $WOLF from staking your CW)</p>
                <p>✦ Air drop V1 for our holders</p>
                <p>✦ Take Community Feedback</p>
                <p>✦ Big Collaborations to attract attention from major companies and potential investors</p>
              </div>

              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>Phase 2</h1>
              </div>
              <div>
                <p>✦ Prepare to launch a unique collection for our old holders</p>
                <p>✦ Launch and mint collection for our holders</p>
                <p>✦ Air drop V2 for our holders</p>
                <p>✦ Build a stake system to stake our token</p>
              </div>


              <div className={styles.circle}>
                <div className={styles.circle_inner}></div>
              </div>
              <div>
                <h1>Futur</h1>
              </div>
              <div>
                <h2>Up coming</h2>
              </div>
              <div>
                <p>✦ Continuously listen to and watch our community </p>
                <p>✦ Implement community voting mechanisms for major decisions </p>
                <p>✦ Stay tuned for updates and exciting developments!</p>
              </div>

            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;
