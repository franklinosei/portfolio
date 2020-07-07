import React from 'react';
import Layout from '../../components/Layout';


const Resume = ({ user }) => {
  return (
    <Layout user={user}>
      <div>

        {/*
        import { SectionTitle, Paragraph } from '../../styles';
        import { EducationItem, Institution, Degree } from './styles';
        import { WorkItem, WorkTitle, JobTitle } from './styles';
        */}

          <h5 className='bg-white'>Page is under construction</h5>

        {/*
        <SectionTitle>Resume</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.position}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      

      <div>
        <h4>Work</h4>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
          */}
      </div>
    </Layout>
  );
};

export default Resume;
