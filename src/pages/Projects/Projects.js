import React from 'react';
import Layout from '../../components/Layout';
import './Projects.css';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

const Projects = ({ user }) => {
  const db = [
    {
      id: 1,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'lorenzxjkcndch zjkcbfvcbx hzb zcb zcbybchch'
    },
    {
      id: 2,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'lorenzxjkcndch zjkcbfvcbx hzb zcb zcbybchch'
    },
    {
      id: 3,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'lorenzxjkcndch zjkcbfvcbx hzb zcb zcbybchch'
    },
    {
      id: 4,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'lorenzxjkcndch zjkcbfvcbx hzb zcb zcbybchch'
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

          <div className='project-content'>
            {
              db.map((project, index) => {
                return(
                  <Col sm>
                    <div className='cards shadow-3'>
                      <Card key={index}>
                        <CardBody>
                          <CardTitle>{project.name}</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                        </CardBody>
                        <img width="100%" src={project.image} alt={project.name} />
                        <CardBody>
                          <CardText>{project.description}</CardText>
                          <CardLink href={project.link}>Card Link</CardLink>
                          <CardLink href={project.link}>Another Link</CardLink>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                )
              })
                
              
            }
          </div>

         </div>
      </div>      

    </Layout>
  );
};

export default Projects;
