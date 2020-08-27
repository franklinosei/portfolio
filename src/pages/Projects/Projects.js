import React from 'react';
import Layout from '../../components/Layout';
import './Projects.css';

const Projects = ({ user }) => {
  const db = [
    {
      id: 1,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640'
    },
    {
      id: 2,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640'
    },
    {
      id: 3,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640'
    },
    {
      id: 4,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640'
    }
  ]

  return (
    <Layout user={user}>
      <div className='project-page-wrapper'>
        <div className='project-area padding-top'>

          <div className='sectionTitle'>
            <h2>Projects</h2>  
            <hr className='hr shadow-3'/>  
          </div>


         </div>
      </div>      

    </Layout>
  );
};

export default Projects;
