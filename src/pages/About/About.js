import React from 'react';
import Layout from '../../components/Layout';
import { Row, Col } from 'react-bootstrap';
import './About.css';
import Tilt from 'react-tilt';
import {AwesomeButton} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { DiCodeBadge,  } from "react-icons/di";
import { FaMobileAlt } from "react-icons/fa";
import {GiArtificialIntelligence} from 'react-icons/gi';


const About = ({ user }) => {
  return (
    <Layout user={user}>

      <div className='about-page-wrapper'>

       <div className='padding-top '>
          <div className='sectionTitle'>
              <h2>About</h2>
              
          </div>

          

          <Row className=''>
            <Col xs={6}>
              
                <Tilt className="Tilt" options={{ max : 5 }} style={{ }} >
                      <div className='about-image Tilt-inner'>
                        <img alt='aboutimage' src='https://unsplash.com/photos/dYEuFB8KQJk/download?force=true&w=1920' />
                      </div>
                </Tilt>
            </Col>

            <Col xs={6}>
                <div className='about-content'>
                  <h3>I am <span class="color-theme">Franklin Osei</span></h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type
                  </p>

                  <a  href="/files/empty.pdf">
                    <AwesomeButton size="small" type="primary">View CV</AwesomeButton>                   
                  </a>

                </div>
              </Col>
          </Row>


        </div>
 


        <div className='sercive-area padding-top bg-grey'>

          <div className='sectionTitle'>
             <h2>Services</h2>
             
          </div>

          <div className='services-wrapper s30-reverse'>
            <Row>
                <Col xs={4} className='mt-30'>
                  <div className="service br2">
                      <span className="service-icon">
                         <DiCodeBadge />
                      </span>
                      
                      <h5>Web Development</h5>
                      <p>
                        Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. 
                        Autem tenetur ratione quod.
                      </p>
                    </div>
                </Col>

                <Col xs={4} className='mt-30'>
                  <div className="service br2">
                    <span className="service-icon">
                      <GiArtificialIntelligence />
                    </span>

                    <h5>Data Science and AI</h5>
                    <p>
                      Lorem ipsum dolor 
                      sit amet consectetur adipisicing elit. 
                      Autem tenetur ratione quod.
                    </p>
                  </div>
                </Col>

                <Col xs={4} className='mt-30'>
                  <div className="service br2">
                      <span className="service-icon">
                        <FaMobileAlt />
                      </span>
                      
                      <h5>Mobile App Development</h5>
                      <p>
                        Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. 
                        Autem tenetur ratione quod.
                      </p>
                    </div>
                </Col>
            </Row>
          </div>
        </div>


      </div>

    </Layout>
  );
};

export default About;