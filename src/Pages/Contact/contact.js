import './contact.css';

import React, {Fragment} from "react";
import Train from '../../Assets/Images/train.jpg'


export default class contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
<Fragment>
<img alt="spinning" src={Train} className="train"></img>
<div className="contact-title">
<h1 className="contact">CONTACT ME</h1>
<p className="contact-summary">What ever your question or query please feel free to get in touch and I will get straight back to you</p>
</div>
<br></br>
<div className="contact-me">
<p  className="contact-intro">EMAIL</p>
<p>maggie@personaltraining.com</p>
<br></br>
<p  className="contact-intro">TRAINING HOURS</p>
<p>Monday: 8:00 - 21:00</p>
<p>Tuesday: 8:00 - 21:00</p>
<p>Wednesday: 8:00 - 21:00</p>
<p>Thursday: 8:00 - 21:00</p>
<p>Friday: 8:00 - 21:00</p>
<p>Saturday: 8:00 - 14:00</p>
<p>Sunday: 8:00 - 14:00</p>
 </div>
<div className="contact-me">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xlepgyen"
        method="POST"
        className="form"
      >
         <label className='form-label'>Name</label>
        <input className='form-input'type="text" name="name" />
        <label  className='form-label'>Email</label>
        <input className='form-input' type="email" name="email" />
        <label  className='form-label'>Message</label>
        <textarea className='form-area' type="textarea" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className='form-btn'>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
      </Fragment>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
