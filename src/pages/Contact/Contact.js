import React from 'react';
import Layout from '../../components/Layout';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import axios from 'axios';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import Loading from '../../components/Loading';
import {Alert} from 'react-bootstrap';



class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      loading: false,
      showAlert: false
    }

  }
  

  handleSubmit(e) {
    e.preventDefault();
    this.setModal();
    
    axios({
      method: 'POST',
      url: 'https://api-port1.herokuapp.com/api/contact/',
      data: {name: this.state.name,
            email: this.state.email,
            message: this.state.message},
      headers: {
        "Content-Type": "application/json"
    }
    }).then((response) => {
      if (response.data.success === 'Sent'){
        this.resetForm();
        this.setAlert();

      }else {
        if(response.data.status === 'Failed'){
          alert("Message failed to send.")
        }
      }
    })
  }

  resetForm() {
    this.setState({name: '', email: '', message: '', loading: false})
  }

  setModal() {
    this.setState({loading: true});
  }

  setAlert() {
    this.setState({showAlert: true});
  }
  
  render(){
  return (
    <Layout>
      <div className='contact-page-wrapper'>
        <div className='padding-top'>

          <Loading show={this.state.loading}/>

          <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method='POST'>
            <h2>CONTACT ME</h2>

              { this.state.showAlert ?
                <Alert variant="success" dismissible onClose={() => this.setState({showAlert: false})}>
                    Message sent successfully!!!
                </Alert>
                :
                ''
              }

            <p type="Name:">
              <input 
                placeholder="Please enter your name..."
                type='text'
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
                >
              </input>
            </p>
            <p type="Email:">
              <input 
                placeholder="Please enter your email..."
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
                type='email'
                >
              </input>
            </p>

            <p type="Message:">
              <textarea 
                rows='5'
                placeholder="Write your message..."
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
                />
            </p>

            <button className='butt' type='submit' >Send Message</button>

            <div className='contact-email'>
              <span className="fa fa-envelope-o"></span> <AiOutlineMail /> franklinosei15@gmail.com

            <div className='social-icons'>
               <a 
                        target='_blank' 
                        className="link near-black hover-silver dib h2 w2 mr3 social-icon" 
                        href="https://github.com/franklinosei" 
                        title="GitHub"
                        rel="noopener noreferrer"
                        >
                          <AiFillGithub />
                </a>

                <a 
                        target='_blank' 
                        className="link hover-silver near-black dib h2 w2 mr3" 
                        href="https://linkedin.com/in/franklin-o-258b7210a" 
                        title="LinkedIn"
                        rel="noopener noreferrer"
                        >
                        <AiFillLinkedin />
                </a>

                <a 
                          target='_blank' 
                          className="link hover-silver near-black dib h2 w2 mr3" 
                          href="https://fb.com/franklinosei" 
                          title="Facebook"
                          rel="noopener noreferrer"
                          >
                            <AiFillFacebook />
                 </a>
            </div>

            </div>
          </form>

      </div>

    </div>
    </Layout>
  );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }


}

export default Contact;
