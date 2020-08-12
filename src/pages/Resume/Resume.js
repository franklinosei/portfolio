import React from 'react';
import Layout from '../../components/Layout';
import './Resume.css';
import {ProgressBar} from 'react-bootstrap';
import {MdWork} from 'react-icons/md';
import {IoMdSchool} from 'react-icons/io';

const Resume = ({ user }) => {
  return (
    <Layout user={user}>
      <div className='resume-wrapper'>

          <div className='skills-area padding-top mi-section'>
            <div className='skills-container'>
              <div className='section-title'>
                <h2>My Skills</h2>
                <hr className='shadow-3'/>
              </div>

              <div className='mi-skills'>
                <div className='row'>

                  <div className="col-lg-6 mt-30">
                    <div className="mi-progress">
                      <h6 className="mi-progress-title">Python</h6>
                      <div className="mi-progress-inner">
                        <div className="mi-progress-percentage">95%</div>
                        <div className="mi-progress-container">
                           <ProgressBar animated now={95} max='100'/>
                        </div>
                      </div>
                    </div>
                  </div>
                
                  <div className="col-lg-6 mt-30">
                    <div className="mi-progress">
                      <h6 className="mi-progress-title">JavaScript</h6>
                      <div className="mi-progress-inner">
                        <div className="mi-progress-percentage">80%</div>
                        <div className="mi-progress-container">
                           <ProgressBar animated now={80} max='100'/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-30">
                    <div className="mi-progress">
                      <h6 className="mi-progress-title">HTML</h6>
                      <div className="mi-progress-inner">
                        <div className="mi-progress-percentage">95%</div>
                        <div className="mi-progress-container">
                          <ProgressBar animated now={95} max='100'/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-30">
                    <div className="mi-progress">
                      <h6 className="mi-progress-title">CSS</h6>
                      <div className="mi-progress-inner">
                        <div className="mi-progress-percentage">80%</div>
                        <div className="mi-progress-container">
                          <ProgressBar animated now={80} max='100'/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-30">
                    <div className="mi-progress">
                      <h6 className="mi-progress-title">JAVA</h6>
                      <div className="mi-progress-inner">
                        <div className="mi-progress-percentage">40%</div>
                        <div className="mi-progress-container">
                          <ProgressBar animated now={40} max='100'/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-30">
                    <div className="mi-progress">
                      <h6 className="mi-progress-title">C++</h6>
                      <div className="mi-progress-inner">
                        <div className="mi-progress-percentage">60%</div>
                        <div className="mi-progress-container">
                          <ProgressBar animated now={60} max='100'/>
                        </div>
                      </div>
                    </div>
                  </div>

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
                      <h6 class="mi-resume-year">Present</h6>
                    </div>
                  <div class="mi-resume-details">
                    <h5>Desktop Applications Developer</h5>
                    <h6 class="mi-resume-company h6">Dawn of Abstraction</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Quas, magni mollitia, aspernatur
                        consequatur accusamus vero eum facere exercitationem 
                        velit suscipit ipsam placeat libero. Deleniti exercitationem 
                        nostrum quasi. Molestiae, vel porro.
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
                      Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Quas, magni mollitia, aspernatur
                        consequatur accusamus vero eum facere exercitationem 
                        velit suscipit ipsam placeat libero. Deleniti exercitationem 
                        nostrum quasi. Molestiae, vel porro.
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. Quas, magni mollitia, aspernatur
                        consequatur accusamus vero eum facere exercitationem 
                        velit suscipit ipsam placeat libero. Deleniti exercitationem 
                        nostrum quasi. Molestiae, vel porro.
                    </p>
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
