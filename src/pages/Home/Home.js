import React from 'react';
import Layout from '../../components/Layout';
import {Container, Col, Row} from 'react-bootstrap';
import './Home.css';
import Typical from 'react-typical';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <Container className='bg-anime'>
        <Container className='overlay'></Container>
          <Container className='container center'>
            <Row className='row center'>
              <Col xs={5}>
                <div className='home-content'>
                 <h1>Hi, I am <span className='name-theme'>Franklin Osei</span></h1>

                  <Typical
                      steps={['I am a python programmer and Data Scientist.', 2000, 'I also create websites with beautiful designs'
                        , 3000, '& web applications alongside mobile app development.', 1500]}
                      loop={3}
                      wrapper="p"
                    />
                  
                  <div className='social-icons'>
                    <Row>
                      <Col>
                        <a class="link near-black hover-silver dib h2 w2 mr3" href="https://github.com/franklinosei" title="GitHub">
                          <AiFillGithub />
                        </a>
                    </Col>
                    <Col>
                        <a class="link hover-silver near-black dib h2 w2 mr3" href="https://linkedin.com/in/franklin-o-258b7210a" title="LinkedIn">
                        <AiFillLinkedin />
                        </a>
                      </Col>

                        <Col>
                          <a class="link hover-silver near-black dib h2 w2 mr3" href="https://twitter.com/" title="Twitter">
                          <AiOutlineTwitter />
                          </a>
                        </Col>
                        <Col>
                          <a class="link hover-silver near-black dib h2 w2 mr3" href="https://fb.com/franklinosei" title="Facebook">
                            <AiFillFacebook />
                          </a>
                        </Col>
                      </Row>
                   </div>
                </div>
              </Col>
            </Row>
          </Container>
          </Container>
    </Layout>
  );
};

export default Home;
