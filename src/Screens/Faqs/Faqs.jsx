import React, { useEffect, useState } from 'react';
import styles from './Faqs.module.scss';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'antd';
import './OverRide.scss';
import { Animated } from 'react-animated-css';
import { PlusOutlined } from '@ant-design/icons';
import { MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Faqs = () => {
  let [keyCheckerState, setKeyCheckerState] = useState();

  const genExtra = () => (
    <PlusOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const genExtra2 = () => (
    <MinusOutlined
      onClick={event => {
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
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className={styles.main_faqs} id='faqss'>
      <Animated
        isVisible={true}
        animationIn='animate__fadeInUp'
        animationOut='animate__fadeInUp'
      >
        <Row>
          <Col sm={12} md={12}>
            <div className={styles.faqs_head}>
              <h1>FAQ</h1>
            </div>
          </Col>
          <Col sm={12} md={12} id='faqs'>
            <Collapse
              defaultActiveKey={[]}
              onChange={callback}
              expandIconPosition='right'
            >
              <Panel
                header='What is collection Supply ?'
                key='1'
                extra={keyCheckerState === '1' ? genExtra2() : genExtra()}
              >
                <p> a 999 unique chaotic wolf<br /> <br /> and another collection come for holders  </p>
              </Panel>
              <Panel
                header='When will chaotic wolves launch ?'
                key='2'
                extra={keyCheckerState === '2' ? genExtra2() : genExtra()}
              >
                <p>in february/2024 join discord for more info </p>
              </Panel>
              <Panel
                header='How can I join ?'
                key='3'
                extra={keyCheckerState === '3' ? genExtra2() : genExtra()}
              >
                <p>by following us on twitter and join discord server to get a chance for free mint </p>
              </Panel>
              <Panel
                header='what is the utility of Chaotic wolves ?'
                key='4'
                extra={keyCheckerState === '4' ? genExtra2() : genExtra()}
              >
                <p>Check the  <a href='#roadmaps'>   Roadmap</a></p>
              </Panel>
              <Panel
                header='Why did the wolf join the blockchain?'
                key='5'
                extra={keyCheckerState === '5' ? genExtra2() : genExtra()}
              >
                <p>To create 'Awooooo'-arious chaos in the digital art world with Chaotic Wolves on Solana!</p>
              </Panel>
              <Panel
                header='Why chaotic ?'
                key='6'
                extra={keyCheckerState === '6' ? genExtra2() : genExtra()}
              >
                <p>Why be orderly when you can run wild with blockchain wolves?</p>
              </Panel>
              <Panel
                header='WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?'
                key='7'
                extra={keyCheckerState === '7' ? genExtra2() : genExtra()}
              >
                <p>On solana blockchain </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Animated>
    </div>
  );
};

export default Faqs;
