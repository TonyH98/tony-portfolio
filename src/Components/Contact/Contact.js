import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact(){


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_9mvsfuj', 'template_6qrh90m', form.current, '27wejsS_ngyWquXcw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    };



return(

<div id="contact">
 <form ref={form} onSubmit={sendEmail} className="contact-form">
<p className='contact-message'>
I am always looking for new opportunities, so don't hesitate to reach out!
</p>

    <label className="contact-label" htmlFor="user_name">Name:
    <input className="contact-input" type="text" name="user_name" required />
    </label>

    <label className="contact-label" htmlFor="email">Email:
    <input className="contact-input" type="email" name="user_email" required />
    </label>

    <label className="contact-label" htmlFor="subject">Subject:
    <input className="contact-input" type="text" name="subject" required />
    </label>

    <label className="contact-label" htmlFor="message">Message:
    <textarea className="contact-input" name="message" required></textarea>
    </label>
 
    <div className='button-container'>

    <button className="contact-button" type="submit">Send Message</button>
    </div>
  </form> 

</div>


)
    
}



export default Contact