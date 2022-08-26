import React, { useRef } from 'react'
import './contact.scss'
import { MdOutlineMail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_94zqgei', 'template_8ayitsv', form.current, 't1ZuUBV7GhSDeIqHo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contactOptionIcons
'/>
            <h4>Email</h4>
            <h5>paulocondori1@gmail.com</h5>
            <a href="mailto:paulocondori1@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <BsFacebook className='contactOptionIcons
'/>
            <h4>Facebook</h4>
            <h5>My profile</h5>
            <a href="https://m.me/ernest,achiever">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contactOptionIcons
'/>
            <h4>Whatsapp</h4>
            <h5>To my account</h5>
            <a href="https://api.whatsapp.com/send?phone=6785385206">Send a message</a>
          </article>
        </div>


        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact