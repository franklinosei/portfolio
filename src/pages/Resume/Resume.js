import React from 'react';
import Layout from '../../components/Layout';
import './Resume.css';
import {MdWork} from 'react-icons/md';
import {IoMdSchool} from 'react-icons/io';
import DevSkill from '../../components/DevSkill/DevSkill';

const Resume = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='resume-wrapper'>

          <div className='skills-area padding-top mi-section'>
            <div className='skills-container'>
              <div className='section-title'>
                <h2>Development Skills</h2>
                <hr className='shadow-3'/>
              </div>

              <div className='mi-skills'>
                <div className='row'>

                  <DevSkill name={'Python'} level={90}  show={true} />

                  <DevSkill name={'JavaScript'} level={85}  show={true} />

                  <DevSkill name={'HTML/CSS'} level={95}   show={true} />

                  <DevSkill name={'Java'} level={50}  show={true} />

                  <DevSkill name={'C++'} level={65}  show={true} />

                </div>
              </div>
            </div>
          </div>


          <div className='skills-area padding-top mi-section mt-70'>
            <div className='skills-container'>
              <div className='section-title'>
                <h2>Other Skills</h2>
                <hr className='shadow-3'/>
              </div>

              <div className='mi-skills'>
                <div className='row'>

                  <DevSkill name={'Deep Learning'} level={100} />

                  <DevSkill name={'React'} level={100} />

                  <DevSkill name={'Flask'} level={100} />

                  <DevSkill name={'Django'} level={100} />

                  <DevSkill name={'Git'} level={100} />


                </div>
              </div>
            </div>
          </div>


          <div className='resume-area mi-section mi-padding-bottom'>
            <div className='resume-container'>

              <div className='section-title'>
                  <h2>Resume</h2>
                  <hr className='shadow-3'/>
              </div>

              <div className="mi-smalltitle">
                <span className="mi-smalltitle-icon">
                  <MdWork />
                </span>
                <h4>Working Experience</h4>
              </div>
              
              <div className='mi-resume-wrapper'>
                <div class="mi-resume mt-30">
                    <div class="mi-resume-summary">
                      <h6 class="mi-resume-year">2020 - Present</h6>
                    </div>
                  <div class="mi-resume-details">
                    <h5>ML/Deeplearning Engineer</h5>
                    <h6 class="mi-resume-company h6">Freelance</h6>
                    <p>
                    I build and maintain code for ML models.
                    </p>
                  </div>
               </div>
              </div>

              <div className='mi-resume-wrapper'>
                <div class="mi-resume mt-30">
                    <div class="mi-resume-summary">
                      <h6 class="mi-resume-year">2020 - Present</h6>
                    </div>
                  <div class="mi-resume-details">
                    <h5>Full Stack Web Developer</h5>
                    <h6 class="mi-resume-company h6">Freelance</h6>
                    <p>
                     I build and maintain code for web apps and websites.
                    </p>
                  </div>
                </div>
               </div>

              <div className='mi-resume-wrapper'>

                <div class="mi-resume mt-30">
                    <div class="mi-resume-summary">
                      <h6 class="mi-resume-year">2020</h6>
                    </div>
                  <div class="mi-resume-details">
                    <h5>Hackathon</h5>
                    <h6 class="mi-resume-company h6">UmojaHack</h6>
                    <p>
                      Expresso Churn Prediction Hackathon
                    </p>
                  </div>
               </div>
              </div>

              <div className='mt-30'></div>

              <div className="mi-smalltitle">
                <span className="mi-smalltitle-icon">
                  <IoMdSchool />
                </span>
                <h4>Educational Qualifications</h4>
              </div>

              <div className='mi-resume-wrapper'>
                <div class="mi-resume mt-30">
                    <div class="mi-resume-summary">
                      <h6 class="mi-resume-year">2018 - Present</h6>
                    </div>
                  <div class="mi-resume-details">
                    <h5>Bsc Computer Science</h5>
                    <h6 class="mi-resume-company h6">University of Ghana</h6>
                    <p>Currently studying a computer science major at the University of Ghana.</p>
                   
                  </div>
               </div>
              </div>


           </div>
          </div>

      </div>
    </Layout>
  );
};

export default Resume;
