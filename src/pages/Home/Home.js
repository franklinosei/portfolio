import React from 'react';
import Layout from '../../components/Layout';
import {Container, Col, Row} from 'react-bootstrap';
import './Home.css';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <Container className='bg-anime'>
        <Container className='overlay'></Container>
          <Container className='container center'>
            <Row className='row center'>
              <Col xs={5}>
                <div className='home-content'>
                 <h1>Hi<span role='img' aria-label="hand wave">👋</span>, I am <span className='name-theme'>Franklin Osei</span></h1>
                  <h4>I am a                    <Typical
                        steps={['programmer 💻', 3000, 'Machine Learning Engineer 👨‍💻', 3000,
                                'coffee lover ☕', 3000, 'student 👨‍🎓', 3000 , 'geek 🤓', 3000]}
                        loop={Infinity}
                        wrapper="strong"
                      />
                    </h4>
                  <div className='hire-button'>
                        <Link to="/contact">
                              <button className='hire'>
                                   <h5>Ready to talk? <span role='img' aria-label="hand wave">🙂</span></h5>
                              </button>
                         </Link>
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
