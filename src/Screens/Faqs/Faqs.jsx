import React, { useEffect, useState } from "react";
import styles from "./Faqs.module.scss";
import { Row, Col } from "reactstrap";
import { Collapse } from "antd";
import "./OverRide.scss";
import { Animated } from "react-animated-css";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Faqs = () => {
  let [keyCheckerState, setKeyCheckerState] = useState();

  const genExtra = () => (
    <PlusOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const genExtra2 = () => (
    <MinusOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  function callback(key) {
    if (key[1]) {
      key.shift();
      setKeyCheckerState(key[0]);
    } else {
      setKeyCheckerState(key[0]);
    }
  }

  return (
    <div className={styles.main_faqs} id="faqss">
      <Animated
        isVisible={true}
        animationIn="animate__fadeInUp"
        animationOut="animate__fadeInUp"
      >
        <Row>
          <Col sm={12} md={12}>
            <div className={styles.faqs_head}>
              <h1>FAQ</h1>
            </div>
          </Col>
          <Col sm={12} md={12} id="faqs">
            <Collapse
              defaultActiveKey={[]}
              onChange={callback}
              expandIconPosition="right"
            >
              <Panel
                header="What is the collection Supply?"
                key="1"
                extra={keyCheckerState === "1" ? genExtra2() : genExtra()}
              >
                <p>
                  {" "}
                  999 unique Fractal Wolves
                  {" "}
                </p>
              </Panel>
              <Panel
                header="When will Fractal Wolves launch?"
                key="2"
                extra={keyCheckerState === "2" ? genExtra2() : genExtra()}
              >
                <p>We are live Go get your wolf now! <a href="https://fractal.inscribenow.io/collections/5d25ebc9730e635d">Mint Now</a></p>
              </Panel>
              <Panel
                header="How can I join?"
                key="3"
                extra={keyCheckerState === "3" ? genExtra2() : genExtra()}
              >
                <p>
                  By following us on Twitter get a
                  chance for free mint.
                </p>
              </Panel>
              <Panel
                header="What is the utility of Fractal Wolves?"
                key="4"
                extra={keyCheckerState === "4" ? genExtra2() : genExtra()}
              >
                <p>
                  Check the <a href="#roadmaps">Roadmap</a>
                </p>
              </Panel>
              <Panel
                header="Why did the wolf join the blockchain?"
                key="5"
                extra={keyCheckerState === "5" ? genExtra2() : genExtra()}
              >
                <p>
                  To create 'Awooooo'-mazing fractals in the digital art world with
                  Fractal Wolves on Fractal Bitcoin!
                </p>
              </Panel>
              <Panel
                header="Why fractals?"
                key="6"
                extra={keyCheckerState === "6" ? genExtra2() : genExtra()}
              >
                <p>
                  Because nature's complexity and beauty are best expressed through fractals, 
                  just like our blockchain wolves!
                </p>
              </Panel>
              <Panel
                header="What BLOCKCHAIN is the project hosted on?"
                key="7"
                extra={keyCheckerState === "7" ? genExtra2() : genExtra()}
              >
                <p>On the Fractal Bitcoin blockchain <a href="https://fractal.unisat.io/market/collection?collectionId=fractal_wolves">Get Your Wolf Now !</a></p>
              </Panel>
              <Panel  
                header="What Marketplace is the project list on?"
                key="8"
                extra={keyCheckerState === "8" ? genExtra2() : genExtra()}
              >
                <p>Our Fractal Wolves collection is now live on the  <a href="https://fractal.unisat.io/market/collection?collectionId=fractal_wolves">Unisat  Marketplace!</a></p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Animated>
    </div>
  );
};

export default Faqs;