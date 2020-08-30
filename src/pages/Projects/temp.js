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
      image: 'https://unsplash.com/photos/hpjSkU2UYSU/download?force=true&w=640',
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
                        <figure className="card-image">
                            <img src={project.image} alt={project.name} />
                        </figure>
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





.project-page-wrapper{
    width: 100%;
    height: 100%;
    background: linear-gradient(70deg, rgb(199, 199, 199) 30%, rgba(0,0,0,0) 30%),
    linear-gradient(120deg, rgb(199, 199, 199) 60%, #037fff 60%);
    padding: 4%;

}

.sectionTitle {
    margin-bottom: 30px;
    text-align: center;
    margin-top: 50px;
    color: #037fff;
    margin-top: auto;
}

.hr {
    width: 50%;
    background-color: #037fff;
}

.cards {
    transition: all .2s ease-in-out; 
    background: rgb(235, 235, 235);
    padding-bottom: 3%;
    width: 45%;
    margin: 0.8rem;
    padding-bottom: 10px;
}

.cards h5 {
    padding: 3%;
    color: black;
}

.cards p {
    padding: 3%;
    color: black;
}

.cards a {
    padding: 3%;
}

.card-image img {
    object-fit: cover;
}

.project-content {

    justify-content: center;
}

.project-area {
    margin: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.cards:hover { 
    transform: scale(1.01); 
}



@media screen and (max-width: 884px) {
    .project-content {
        flex-direction: column;
        width: auto;
    }
    .cards {
        margin: 1%;
        width: 100%;
        margin-bottom: 3%;
    }
    
    .project-area {
        margin: 1%;
    }
}
