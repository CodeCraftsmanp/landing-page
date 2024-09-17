import React from "react";
import { Row, Col } from "reactstrap";
import styles from "./Partners.module.scss";
import "./OverRide.scss";

const MintButton = () => (
  <a href="https://fractal.inscribenow.io/collections/5d25ebc9730e635d">
  <button className={styles.mintButton}>
    <span>Mint your Wolf now !!!</span>
  </button>
  </a>
);

const Partners = ({ isJoinPage = false }) => {
  return (
    <div
      className={`${styles.main_partners} ${
        isJoinPage ? "mainpartnersOverride" : ""
      }`}
    >
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            {/*<img src='Assets/bottompage.png' alt='' />*/}
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div
            className={`${styles.partners} ${
              isJoinPage ? "partnersOverride" : ""
            }`}
          >
            <div className={styles.head}>
              <MintButton />
            </div>
            {isJoinPage ? null : (
              <div className={styles.social_icons}>
                <a
                  href="https://twitter.com/@Fractal_wolves"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src="Assets/xlogo.png"
                      alt="X Icon"
                      width="100"
                      height="100"
                    />
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