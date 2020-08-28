import React from 'react';
import Layout from '../../components/Layout';
import './Projects.css';
import {AwesomeButton} from 'react-awesome-button';

const Projects = ({ user }) => {
  const db = [
    {
      id: 1,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
    {
      id: 2,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    }
  ]

  return (
    <Layout user={user}>
      <div className='project-page-wrapper'>
        <div className='padding-top'>

          <div className='sectionTitle'>
            <h2>Projects</h2>  
            <hr className='hr shadow-3'/>  
          </div>

          <div className='project-content'>
           <div className='project-area'>
            {
              db.map((project, index) => {
                return(
                  
                      <div className='cards shadow-3 br3'>
                        <h5>{project.name}</h5>
                        <div className="card-image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <br /> 
                        <div className="content">
                          <p>{project.description}</p>
                        </div> 
                        <a href={'"' + project.link + '"'}>
                          <AwesomeButton size="medium" type="primary">
                             See it
                          </AwesomeButton>
                        </a>
                      </div>
                   
                )
              })                       
            }
            </div>
          </div>

        </div>
      </div>      

    </Layout>
  );
};

export default Projects;
