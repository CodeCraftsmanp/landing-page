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
            {[
              {
                phase: 'Phase 1: Foundation & Community Building',
                points: [
                  '✦ Engage and Educate: Launch educational content to inform the community about FW, Fractal BTC, and CAT protocol tokens.',
                  '✦ Exclusive Early Access: Offer VIP privileges for early adopters with perks and early news.',
                  '✦ Mint 999 Unique FW Tokens: Release the first collection of unique Fractal Wolves with rich lore.',
                  '✦ Develop the CAT Protocol Minting System: Build a seamless and user-friendly minting platform.',
                  '✦ Partnership Announcements: Secure and announce strategic partnerships to increase credibility.',
                  '✦ Community-Driven Growth: Foster an active community with engagement rewards and governance roles.',
                ],
              },
              {
                phase: 'Phase 2: Rewarding Loyalty & Expanding the Ecosystem',
                points: [
                  '✦ Loyal Holder Collection: Unveil a premium collection for original FW holders with exclusive perks.',
                  '✦ Mint for Loyal Holders: Offer early access minting for dedicated supporters.',
                  '✦ Staking Platform: Introduce staking for FW tokens with rewards like exclusive NFTs or governance rights.',
                  '✦ Community Innovation Lab: Reward the best community-driven ideas with recognition and integration.',
                ],
              },
              {
                phase: 'Phase 3: Empower the Community & Long-Term Vision',
                points: [
                  '✦ Community Voting Mechanisms: Implement decentralized governance for crucial decisions.',
                  '✦ Quarterly Airdrops and Giveaways: Reward loyal holders with periodic bonuses like airdrops or trait upgrades.',
                  '✦ FW Tokenomics Launch: Introduce a detailed tokenomics roadmap for cross-utility across projects.',
                  '✦ Global Collaborations: Partner with global firms to elevate FW’s presence and market reach.',
                  '✦ Metaverse Integration: Prepare for virtual world integration with FW tokens offering in-world utilities.',
                ],
              },
              {
                phase: 'Upcoming: Dynamic Growth & Sustained Evolution',
                points: [
                  '✦ Continuous Feedback Loop: Establish consistent feedback channels to meet community needs.',
                  '✦ Dynamic Roadmap Updates: Offer quarterly updates reflecting the evolving blockchain and NFT space.',
                  '✦ Real-World Impact: Partner with charitable causes, allowing FW holders to contribute through NFTs.',
                  '✦ Fractal Wolves Expansion: Explore cross-chain compatibility and gamified experiences for FW holders.',
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <div className={styles.circle}>
                  <div className={styles.circle_inner}></div>
                </div>
                <h1>{section.phase}</h1>
                <div>
                  {section.points.map((point, idx) => (
                    <p key={idx}>{point}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>


          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default RoadMap;
