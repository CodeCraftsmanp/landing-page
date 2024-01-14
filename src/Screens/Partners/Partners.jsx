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
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                      <path fill="#37d0ee" d="M56.742,17.149c-1.358,0.465-2.827,0.727-4.374,0.902c1.525-0.759,2.58-1.877,3.566-3.246	c0.564-0.783-0.31-1.807-1.179-1.386c-1.545,0.748-3.038,1.304-4.918,1.624c-1.839-1.653-4.263-2.665-6.932-2.665	c-3.877,0-7.255,2.123-9.028,5.264c-0.858,1.509-1.349,3.255-1.349,5.113c0,0.639,0.077,1.257,0.188,1.863	c-8.339-0.248-15.328-4.554-19.305-9.97c-0.442-0.601-1.364-0.473-1.638,0.221c-0.422,1.067-0.943,2.225-0.943,4.112	c0,0.113,0,0.217,0.009,0.321c0.038,1.226,0.311,2.396,0.783,3.453c0.887,2.047,2.491,3.717,4.5,4.698	c-0.189,0.009-0.377,0.019-0.575,0.019c-1.887,0-2.508-0.646-3.531-0.912c-0.644-0.168-1.274,0.37-1.176,1.028	c0.309,2.095,1.4,4.301,2.858,5.705c1.566,1.528,3.66,2.509,5.991,2.651c-1.244,0.613-2.65,0.962-4.141,0.962h-0.943	c-0.713,0-1.158,0.755-0.836,1.391c1.582,3.129,5.246,5.217,9.172,5.204c-3.783,2.385-8.25,3.783-13.053,3.783H8.943	C8.423,47.283,8,47.706,8,48.226c0,0.432,0.296,0.781,0.692,0.892l-0.002,0.016c0,0,7.104,2.865,15.347,2.865	c15.972,0,28.953-12.802,29.236-28.707c0.009-0.179,0.009-0.358,0.009-0.538s0-0.358-0.009-0.538	c-0.013-0.259-0.045-0.514-0.077-0.769c1.746-0.556,3.301-1.47,4.539-2.76C58.417,17.977,57.674,16.83,56.742,17.149z"></path><ellipse cx="27" cy="61" opacity=".3" rx="19" ry="3"></ellipse><path d="M53.18,25.06C52.01,40.14,39.41,52,24.04,52c-1.73,0-3.41-0.13-4.98-0.33	c0.16-2.61,2.33-4.67,4.98-4.67c11.1,0,20.76-7.5,23.49-18.23C48.17,26.23,50.64,24.65,53.18,25.06z" opacity=".15"></path><path fill="#fff" d="M47.76,13.59c-0.54,2.18-2.51,3.79-4.85,3.79c-1.94,0-3.73,1.04-4.68,2.72	c-0.47,0.82-0.7,1.71-0.7,2.65c0,0.27,0.03,0.57,0.11,0.97c0.27,1.49-0.15,3.01-1.13,4.16c-0.95,1.1-2.34,1.74-3.79,1.74h-0.15	c-6.63-0.2-13.11-2.62-18.24-6.81c-2.13-1.75-2.45-4.9-0.7-7.04c0.11-0.14,0.23-0.27,0.35-0.39c4.05,5.06,10.78,9,18.74,9.24	c-0.11-0.61-0.19-1.23-0.19-1.87c0-1.85,0.49-3.6,1.35-5.11c1.77-3.14,5.15-5.26,9.03-5.26C44.66,12.38,46.32,12.82,47.76,13.59z" opacity=".3"></path><path fill="#fff" d="M37.53,24.25c-0.829,0-1.5-0.671-1.5-1.5c0-1.214,0.302-2.356,0.898-3.396	c1.21-2.14,3.504-3.474,5.981-3.474c0.829,0,1.5,0.671,1.5,1.5s-0.671,1.5-1.5,1.5c-1.398,0-2.691,0.75-3.375,1.958	c-0.341,0.596-0.505,1.218-0.505,1.912C39.03,23.579,38.359,24.25,37.53,24.25z"></path>
                    </svg>
                  </div>
                </a>
                <a href="https://discord.gg/CcbvYvxV58" target="_blank" rel="noopener noreferrer">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                      <path fill="#85cbf8" d="M62.34,43.27c-1.09-10.09-3.48-20-6.82-27.5a3.89,3.89,0,0,0-1.7-1.84A44.47,44.47,0,0,0,41.88,9.56,2,2,0,0,0,39.49,11L39,13l.08.72a35.17,35.17,0,0,0-14.16,0L25,13l-.49-2a2,2,0,0,0-2.39-1.47,44.47,44.47,0,0,0-11.94,4.37,3.89,3.89,0,0,0-1.7,1.84c-3.34,7.54-5.73,17.41-6.82,27.5a4,4,0,0,0,1.41,3.47A42.91,42.91,0,0,0,15.9,54.15a2,2,0,0,0,2.51-1L21,48l0-.3A46.94,46.94,0,0,0,43,47.7l0,.3,2.59,5.18a2,2,0,0,0,2.51,1,42.91,42.91,0,0,0,12.83-7.41A4,4,0,0,0,62.34,43.27ZM22.2,40.51c-2.8,0-5.07-2.94-5.07-6.55s2.27-6.55,5.07-6.55,5.07,2.93,5.07,6.55S25,40.51,22.2,40.51Zm20,0c-2.8,0-5.07-2.94-5.07-6.55s2.27-6.55,5.07-6.55,5.07,2.93,5.07,6.55S45,40.51,42.2,40.51Z"></path><path fill="#9fddff" d="M48,19.74l-.11.26a2.54,2.54,0,0,1-3.77,1.1A22.69,22.69,0,0,0,32,18a23,23,0,0,0-11.88,3,2.5,2.5,0,0,1-3.45-.84L16.6,20a2.52,2.52,0,0,1,1.12-3.61A36.35,36.35,0,0,1,32,13c5,0,11.21,2.13,14.55,3.43A2.51,2.51,0,0,1,48,19.74Z"></path><path fill="#9fddff" d="M60.93,46.74A42.91,42.91,0,0,1,48.1,54.15a2,2,0,0,1-2.51-1l0,0a42,42,0,0,0,10.36-6.4,4,4,0,0,0,1.41-3.47c-1.09-10.09-3.48-20-6.82-27.5a3.89,3.89,0,0,0-1.7-1.84,44.21,44.21,0,0,0-9-3.63,2,2,0,0,1,2-.74,44.47,44.47,0,0,1,11.94,4.37,3.89,3.89,0,0,1,1.7,1.84c3.34,7.54,5.73,17.41,6.82,27.5A4,4,0,0,1,60.93,46.74Z"></path><path fill="#7bbeeb" d="M3.28,46.74a42.91,42.91,0,0,0,12.83,7.41,2,2,0,0,0,2.51-1l0,0a42,42,0,0,1-10.36-6.4,4,4,0,0,1-1.41-3.47c1.09-10.09,3.48-20,6.82-27.5a3.89,3.89,0,0,1,1.7-1.84,44.21,44.21,0,0,1,9-3.63,2,2,0,0,0-2-.74,44.47,44.47,0,0,0-11.94,4.37,3.89,3.89,0,0,0-1.7,1.84C5.35,23.31,3,33.18,1.87,43.27A4,4,0,0,0,3.28,46.74Z"></path><path fill="#8d6c9f" d="M22 27c-3.31 0-6 3.14-6 7s2.69 7 6 7 6-3.14 6-7S25.31 27 22 27zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5S24.21 39 22 39zM42 27c-3.31 0-6 3.14-6 7s2.69 7 6 7 6-3.14 6-7S45.31 27 42 27zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5S44.21 39 42 39z"></path><path fill="#8d6c9f" d="M63.33,43.16c-1.12-10.41-3.57-20.28-6.89-27.8A4.89,4.89,0,0,0,54.3,13,45.81,45.81,0,0,0,42.08,8.58a3,3,0,0,0-3.56,2.21l-.43,1.73a36.25,36.25,0,0,0-12.18,0l-.43-1.73a3,3,0,0,0-3.56-2.21A45.81,45.81,0,0,0,9.7,13a4.89,4.89,0,0,0-2.14,2.32C4.24,22.88,1.79,32.75.67,43.16a5,5,0,0,0,1.76,4.34,43.79,43.79,0,0,0,13.13,7.58,3,3,0,0,0,1.06.19,3,3,0,0,0,2.69-1.66l2.37-4.74a48.3,48.3,0,0,0,20.65,0l2.37,4.74a3,3,0,0,0,2.69,1.66,3.06,3.06,0,0,0,1.06-.19,43.8,43.8,0,0,0,13.13-7.58A5,5,0,0,0,63.33,43.16Zm-3,2.82a41.8,41.8,0,0,1-12.53,7.23,1,1,0,0,1-1.27-.48L44.32,48.4a46.3,46.3,0,0,0,7.09-2.52,1,1,0,0,0-.82-1.82A44.92,44.92,0,0,1,32,48a44.92,44.92,0,0,1-18.59-3.94,1,1,0,0,0-.82,1.82,46.3,46.3,0,0,0,7.09,2.52l-2.16,4.33a1,1,0,0,1-1.27.48A41.79,41.79,0,0,1,3.72,46a3,3,0,0,1-1.06-2.6c1.1-10.21,3.49-19.87,6.74-27.2a2.88,2.88,0,0,1,1.26-1.37,43.81,43.81,0,0,1,11.68-4.27,1,1,0,0,1,1.2.73l.41,1.64a26.79,26.79,0,0,0-8.51,3.38,1,1,0,0,0,1.13,1.65c.06,0,5.9-3.93,15.44-3.93s15.38,3.89,15.44,3.93a1,1,0,0,0,1.13-1.65,26.78,26.78,0,0,0-8.51-3.38l.41-1.64a1,1,0,0,1,1.2-.73,43.81,43.81,0,0,1,11.68,4.27,2.88,2.88,0,0,1,1.26,1.37c3.24,7.33,5.64,17,6.74,27.2A3,3,0,0,1,60.28,46Z"></path><path fill="#8d6c9f" d="M34.67 52a37.93 37.93 0 0 1-11.43-.94A1 1 0 1 0 22.77 53 39.56 39.56 0 0 0 32 54.12c.94 0 1.88 0 2.81-.1a1 1 0 1 0-.14-2zM40.77 51.09c-.84.2-1.69.38-2.53.52a1 1 0 0 0 .16 2h.17c.89-.15 1.78-.33 2.67-.54a1 1 0 0 0-.47-1.95zM32 16.42a1 1 0 0 0-1 1v1.76a1 1 0 0 0 2 0V17.42A1 1 0 0 0 32 16.42zM36.75 20.61l.24 0a1 1 0 0 0 1-.77l.42-1.72a1 1 0 0 0-1.94-.47L36 19.4A1 1 0 0 0 36.75 20.61zM41.31 21.89a1 1 0 0 0 1.34-.44l.81-1.61a1 1 0 1 0-1.78-.9l-.81 1.61A1 1 0 0 0 41.31 21.89zM26 19.87a1 1 0 0 0 1 .77l.24 0A1 1 0 0 0 28 19.4l-.42-1.72a1 1 0 0 0-1.94.47zM21.35 21.45a1 1 0 1 0 1.78-.9l-.81-1.61a1 1 0 1 0-1.78.9z"></path>
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
