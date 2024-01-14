import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Partners.module.scss';
import './OverRide.scss';

const Partners = ({ isJoinPage = false }) => {
  return (
    <div
      className={`${styles.main_partners} ${isJoinPage ? 'mainpartnersOverride' : ''
        }`}
    >
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            <img src='Assets/bottompage.png' alt='' />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={`${styles.partners} ${isJoinPage ? "partnersOverride" : ""}`}>
            <div className={styles.head}>
              <h3>

                CWN
              </h3>
            </div>
            {isJoinPage ? null : (
              <div className={styles.social_icons}>
                <a href="https://twitter.com/_ChaoticWolves" target="_blank" rel="noopener noreferrer">
                  <div>
                    <img src="Assets/xlogo.png" alt="X Icon" width="200" height="120" />
                  </div>
                </a>
                <a href="https://discord.gg/CcbvYvxV58" target="_blank" rel="noopener noreferrer">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                      <radialGradient id="La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#8c9eff"></stop><stop offset=".368" stop-color="#889af8"></stop><stop offset=".889" stop-color="#7e8fe6"></stop><stop offset="1" stop-color="#7b8ce1"></stop></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa_2mIgusGquJFz_gr1)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"></path><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"></ellipse><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"></ellipse><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"></ellipse>
                    </svg>
                  </div>
                </a>
                <a href="https://www.subber.xyz/chaotic-wolves" target="_blank" rel="noopener noreferrer">
                  <div>
                    <img src="Assets/subber.png" alt="Subber Icon" width="100" height="100" />
                  </div>
                </a>
              </div>


            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
