import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import './Resume.css';
import axios from 'axios';
import {MdWork} from 'react-icons/md';
import {IoMdSchool} from 'react-icons/io';
import DevSkill from '../../components/DevSkill/DevSkill';

const Resume = () => {

  const [skills, setSkills] = useState(['']);
  const [otherskills, setOtherSkills] = useState(['']);
  const [works, setWorks] = useState(['']);
  const [education, setEducation] = useState(['']);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchData() {
                    await axios.all([ axios.get("https://api-port1.herokuapp.com/api/skills.json"),
                                      axios.get("https://api-port1.herokuapp.com/api/otherskills.json"),
                                      axios.get("https://api-port1.herokuapp.com/api/work.json"),
                                      axios.get("https://api-port1.herokuapp.com/api/education.json")
                     ], {cancelToken: source.token}).then((res) =>{ 
                      setSkills(res[0].data);
                      setOtherSkills(res[1].data);
                      setWorks(res[2].data);
                      setEducation(res[3].data);
          }, []).catch(error => {
            if(axios.isCancel(error)){
              console.log(error.message)
            } else {
              console.log(error)
            }
        })
      }

      /**
    async function fetchOtherSkill() {
        await axios.get("https://api-port1.herokuapp.com/api/otherskills.json"
        ).then((res) =>{ 
           const response = res.data;
          setOtherSkills(response);
}, []).catch(function(error) {
console.log(error)
})
}

async function fetchWork() {
  await axios.get("https://api-port1.herokuapp.com/api/work.json"
  ).then((res) =>{ 
     const response = res.data;
    setWorks(response);
}, []).catch(function(error) {
console.log(error)
})
}

async function fetchEdu() {
  await axios.get("https://api-port1.herokuapp.com/api/education.json"
  ).then((res) =>{ 
     const response = res.data;
    setEducation(response);
}, []).catch(function(error) {
console.log(error)
})
}
**/
    fetchData();

    return () => {
      source.cancel('Request canceled.');
   }
      
  }, [setSkills, setOtherSkills, setWorks, setEducation]);

  return (
    <Layout>
      <div className='resume-wrapper'>

        <div className='skills-wrapper'>

          <div className='upper'>
           <div className='skills-area padding-top mi-section'>
            <div className='skills-container'>
              <div className='section-title'>
                <h2>Development Skills</h2>
                <hr className='shadow-3'/>
              </div>

              <div className='mi-skills'>
              <div className='column'>
                {skills.map((skill, index) => {
                  return(
                    
                       <DevSkill name={skill.name} level={skill.level}  show={true} key={index}/>
                    
                  );
                })}
                </div>

              </div>
            </div>
          </div>
          </div>

          <div className='lower'>
           <div className='skills-area padding-top mi-section mt-70'>
            <div className='skills-container'>
              <div className='section-title'>
                <h2>Other Skills</h2>
                <hr className='shadow-3'/>
              </div>

              <div className='mi-skills'>
                <div className='column'>

                {otherskills.map((otherskill, index) => {
                  return(
                    
                     <DevSkill name={otherskill.name} level={otherskill.level}  show={false} key={index}/>
                    
                  );
                })}

                </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className='res-wrapper'>

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
                    
                  {works.map((work, index) => {
                      return(
                        
                        <div class="mi-resume mt-30">
                          <div class="mi-resume-summary">
                            <h6 class="mi-resume-year">{work.start_year} - {work.end_year}</h6>
                          </div>
                          <div class="mi-resume-details">
                            <h5>{work.title}</h5>
                            <h6 class="mi-resume-company h6">{work.company}</h6>
                            <p>
                            {work.description}
                            </p>
                          </div>
                      </div>
                        
                      );
                    })}

                  </div>

                  <div className='mt-30'></div>
                  <div className='mt-20'></div>

                  <div className="mi-smalltitle">
                    <span className="mi-smalltitle-icon">
                      <IoMdSchool />
                    </span>
                    <h4>Educational Qualifications</h4>
                  </div>

                  <div className='mi-resume-wrapper'>
                  {education.map((edu, index) => {
                      return(
                          <div class="mi-resume mt-30" key={index}>
                            <div class="mi-resume-summary">
                              <h6 class="mi-resume-year">{edu.start_year} - {edu.end_year}</h6>
                              </div>
                            <div class="mi-resume-details">
                              <h5>{edu.course}</h5>
                              <h6 class="mi-resume-company h6">{edu.institution}</h6>
                              <p>{edu.description}</p>
                            
                            </div>
                        </div>
                        
                      );
                    })}

                  </div>


              </div>
          </div>
          </div>
      </div>
    </Layout>
  );
};

export default Resume;
