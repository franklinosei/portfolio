import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import './Projects.css';
//import {AwesomeButton} from 'react-awesome-button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import {AiFillGithub} from 'react-icons/ai';
import Spin from '../../components/Spinner';

const Projects = () => {
  AOS.init({ duration: 1000 });

  const [projects, setProjects] = useState(['']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchProject() {
                    await axios.get("https://api-port1.herokuapp.com/api/projects.json"
                    , {cancelToken: source.token}).then((res) =>{ 
                       const response = res.data;
                      setLoading(false)
                      setProjects(response);
          }, [setProjects]).catch(error => {
            if(axios.isCancel(error)){
              console.log(error.message)
            } else {
              console.log(error)
            }
        })
      }

    fetchProject();

    return () => {
     source.cancel('Request canceled.');
  }
      
  }, [setProjects]);

    return (
      <Layout>
        <div className='project-page-wrapper'>
          <div className='padding-top'>

            <div className='sectionTitle'>
              <h2>Projects</h2>  
              <hr className='hr shadow-3'/>  
            </div>

            <div className='project-area row-cards'>
              { loading ?
              <div className='spin'> 
                <Spin />
              </div> :
                projects.map((project, index) => {
                  return(
                    
                        <div data-aos="fade-left" className='card br3' key={index}>
                          <div className='card-content'>
                            <div className='card-image'>
                              <a href={ project.url }>
                                <img src={project.image_url} alt={project.title} />
                              </a>
                            </div>
                            <div className='card-text'>
                              <div className='dis-flex'>
                                <div className='card-title'>
                                   <h5>{project.title}</h5>
                                </div>{ project.github ?
                                <div className='gitLink'>
                                  <a href={ project.github_url } target='_blank' rel="noopener noreferrer">
                                    <AiFillGithub className='ico'/>
                                  </a>
                                </div>
                                : '' }
                              </div>
                              <hr />
                              <p>{project.description}</p>
                            </div>
                          
                          </div>
                        </div>
                    
                  )
                })                       
              }

            </div>

          </div>
          
        </div>      

      </Layout>
    );
}

export default Projects;
