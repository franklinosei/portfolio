import React from 'react';
import Layout from '../../components/Layout';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import axios from 'axios';

class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3001/api/contact',
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success'){
        alert('Message Sent.');
        this.resetForm()
      }else {
        if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      }
    })
  }

  resetForm() {
    this.setState({name: '', email: '', message: ''})
  }

  
  render(){
  return (
    <Layout>
      <div className='contact-page-wrapper'>
        <div className='padding-top'>

          <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method='POST'>
            <h2>CONTACT ME</h2>
            <p type="Name:">
              <input 
                placeholder="Please enter your name.."
                type='text'
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
                >
              </input>
            </p>
            <p type="Email:">
              <input 
                placeholder="Please enter your email.."
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
                type='email'
                >
              </input>
            </p>

            <p type="Message:">
              <textarea 
                rows='5'
                placeholder="Write your message.."
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
                />
            </p>

            <button className='butt' type='submit' >Send Message</button>

            <div className='contact-email'>
              <span class="fa fa-envelope-o"></span> <AiOutlineMail /> franklinosei15@gmail.com
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
