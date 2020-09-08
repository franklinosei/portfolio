import React from 'react';
import Layout from '../../components/Layout';
import './About.css';
import img from './img/img.jpg';
import { Col} from 'react-bootstrap'; 
import {AwesomeButton} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { DiCodeBadge,  } from "react-icons/di";
import {GiArtificialIntelligence} from 'react-icons/gi';
import {Link} from 'react-router-dom';


const About = ({ user }) => {
  return (
    <Layout user={user}> 
    
      <div className='about-page-wrapper'>

        <div className='about-area padding-top'>

          <div className='sectionTitle'>
                <h2>About Me</h2>  
                <hr className='hr shadow-3'/>  
          </div>

          <div className='about-me-content'>

            <Col xs={6} className='col'>
              
                        <div className='about-image Tilt-inner br3'>
                          <img alt='aboutimage' src={img} />
                        </div>
              
            </Col>

            <div className='mt-30'></div>

            <div className='about-content-div'>

              <Col xs={6} className='about-content mt-30 col'>
                    <h3>I am <span class="color-theme">Franklin Osei</span></h3>
                    <p className='br2'>
                      I'm a Passionate <strong>Data scientist,
                      AI Engineer and a Full-stack Developer </strong>
                       with many years of experience.

                       <blockquote className="notification br2 pa3">
                       <em>
                         I look forward to working with you soon!
                       </em>
                      </blockquote>
                     </p>
          
 
                    <a  
                      href="https://gitconnected.com/franklinosei/resume" 
                      target='_blank'
                      rel="noopener noreferrer">
                       <AwesomeButton size="large" type="primary"> View CV </AwesomeButton>                   
                    </a>

                </Col>

            </div>
          </div>
        </div>


        <div className='paddings-top service-area'>

          <div className='sectionTitle'>
              <h2>Services</h2>
              <hr className='hr shadow-3'/>
          </div>
            <div className='services'>
                <Col sm>
                  <div className="service br3 shadow-5">
                      <span className="service-icon">
                        <GiArtificialIntelligence />
                      </span>

                      <h5>Data Science and AI</h5>
                      <p>
                        Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. 
                        Autem tenetur ratione quod.
                      </p>
                      <hr />
                      <Link to="/projects">
                        <AwesomeButton size="large" type="primary"> Projects >> </AwesomeButton> 
                      </Link>
                    </div>
                </Col>
                <Col sm>
                    <div className="service br3 shadow-5">
                        <span className="service-icon">
                          <DiCodeBadge />
                        </span>
                        
                        <h5>Web Development</h5>
                        <p>
                          Lorem ipsum dolor 
                          sit amet consectetur adipisicing elit. 
                          Autem tenetur ratione quod.
                        </p>
                        <hr />
                        <Link to="/projects">
                          <AwesomeButton size="large" type="primary"> Projects >> </AwesomeButton> 
                        </Link>
                      </div>
                </Col>
                {/*
                < Col sm>
                    <div className="service br3 shadow-5">
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
                        */}
              </div>
            </div>
        </div>      

      
    </Layout>
  );
};

export default About;