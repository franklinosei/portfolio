import React from 'react';
import Layout from '../../components/Layout';
import {Container, Col, Row} from 'react-bootstrap';
import './Home.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <Container className='bg-anime'>
        <Container className='overlay'></Container>
          <Container className='container center'>
            <Row className='row center'>
              <Col xs={5}>
                <div className='home-content'>
                 <h1>Hi<span role='img' aria-label="hand wave">👋</span>, I am <span className='name-theme'>Franklin Osei</span></h1>

                  <Typical
                      steps={['I am a python programmer and a Machine Learning Engineer.', 2000, 'I also create websites with beautiful designs'
                        , 3000, '& web applications alongside mobile app development.', 1500]}
                      loop={3}
                      wrapper="h6"
                    />
                  <div className='hire-button'>
                        <Link to="/contact">
                              <button className='hire'>
                                   <h5>Hire Me <span role='img' aria-label="hand wave">🙂</span></h5>
                              </button>
                         </Link>
                  </div>
                  { /* <div className='social-icons'>
                    <Row>
                      <Col>
                        <a 
                        target='_blank' 
                        className="link near-black hover-silver dib h2 w2 mr3 social-icon" 
                        href="https://github.com/franklinosei" 
                        title="GitHub"
                        rel="noopener noreferrer"
                        >
                          <AiFillGithub />
                        </a>
                    </Col>
                    <Col>
                        <a 
                        target='_blank' 
                        className="link hover-silver near-black dib h2 w2 mr3" 
                        href="https://linkedin.com/in/franklin-o-258b7210a" 
                        title="LinkedIn"
                        rel="noopener noreferrer"
                        >
                        <AiFillLinkedin />
                        </a>
                      </Col>

                        <Col>
                          <a 
                          target='_blank' 
                          className="link hover-silver near-black dib h2 w2 mr3" 
                          href="https://twitter.com/" 
                          title="Twitter"
                          rel="noopener noreferrer">
                          <AiOutlineTwitter />
                          </a>
                        </Col>
                        <Col>
                          <a 
                          target='_blank' 
                          className="link hover-silver near-black dib h2 w2 mr3" 
                          href="https://fb.com/franklinosei" 
                          title="Facebook"
                          rel="noopener noreferrer"
                          >
                            <AiFillFacebook />
                          </a>
                        </Col>
                      </Row>
                   </div> */}
                </div>
              </Col>
            </Row>
          </Container>
          </Container>
    </Layout>
  );
};

export default Home;
