import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import './styles.css';

const DevSkill = ({name, level, show}) => {
return(    

<div className="col-lg-6 mt-30">
        <div className="mi-progress">
            <h6 className="mi-progress-title">{name}</h6>
             <div className="mi-progress-inner">
            <div className="mi-progress-percentage"> {show ? level + '%' : '' }</div>
           <div className="mi-progress-container">
            <ProgressBar animated now = {level} max='100'/>
            </div>
          </div>
        </div>
    </div>
    )

}

export default DevSkill;