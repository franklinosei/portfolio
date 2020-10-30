import React from 'react';
import {Modal, Spinner} from 'react-bootstrap';
import './Loading.css';

const Loading = (props, loaden) =>{

    return(
        <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='mod'
      >

            <Modal.Body className='mod-content'>
                 
                <Spinner animation="grow" />     
           
            </Modal.Body>
        </Modal>
    )
}

export default Loading;