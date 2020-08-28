import React from 'react';
import Layout from '../../components/Layout';
import './Projects.css';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import {AwesomeButton} from 'react-awesome-button';
import {AiFillGithub} from 'react-icons/ai';

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
    },
    {
      id: 3,
      name: 'project name',
      link: 'github link',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
    {
      id: 4,
      name: 'project name',
      link: 'google.com',
      image: 'https://unsplash.com/photos/qjnAnF0jIGk/download?force=true&w=640',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
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
                          <CardTitle><h5 className='cardColor'>{project.name}</h5></CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                        </CardBody>
                         <img width="100%" src={project.image} alt={project.name} />
                        <CardBody>
                          <CardText><h5 className='cardColor'>{project.description}</h5></CardText>
                          <CardLink href={project.link}>
                            <AwesomeButton size="medium" type="primary"> Card Link </AwesomeButton>
                          </CardLink>
                          <CardLink href={project.link}>
                            <AwesomeButton size="medium" type="primary">
                              <AiFillGithub /> Code
                            </AwesomeButton>
                          </CardLink>
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
