import React from 'react';
import Layout from '../../components/Layout';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>

        {/*
        import { SectionTitle, Pill } from '../../styles';
        import { ProjectItem, ProjectTitle, SkillContainer } from './styles';
        */}

            <h5 className='bg-black' style={{color:'white'}}>Page is under construction</h5>

        {/*
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
                */}
      </div>
    </Layout>
  );
};

export default Projects;
