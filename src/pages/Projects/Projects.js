import React from 'react';
import Layout from '../../components/Layout';
import './Projects.css';
import {AwesomeButton} from 'react-awesome-button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const db = [
  {
    id: 1,
    name: 'project name',
    link: 'github link',
    image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
    description: ''
  },
  {
    id: 2,
    name: 'project name',
    link: 'github link',
    image: 'https://unsplash.com/photos/hpjSkU2UYSU/download?force=true&w=640',
    description: ''
  },
  {
    id: 3,
    name: 'project name',
    link: 'github link',
    image: 'https://unsplash.com/photos/hpjSkU2UYSU/download?force=true&w=640',
    description: ''
  }
]


  AOS.init({ duration: 1000 });



class Projects extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

 

  render() {

    return (
      <Layout>
        <div className='project-page-wrapper'>
          <div className='padding-top'>

            <div className='sectionTitle'>
              <h2>Projects</h2>  
              <hr className='hr shadow-3'/>  
            </div>

            <div className='project-area row-cards'>
              {
                db.map((project, index) => {
                  return(
                    
                        <div data-aos="fade-left" className='card shadow-3 br3'>
                          <div className='card-content'>
                            <div className='card-image'>
                              <a href={'"' + project.link + '"'}>
                                <img src={project.image} alt={project.name} />
                              </a>
                            </div>
                            <div className='card-text'>
                              <h5>{project.description}</h5>
                            </div>
                            <a href={'"' + project.link + '"'}>
                              <AwesomeButton size="medium" type="primary">
                                See it >>
                              </AwesomeButton>
                            </a>
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
  };
}

export default Projects;
