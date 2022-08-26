import React from 'react'
import './contact.scss'
import {MdOutlineMail} from 'react-icons/md'

const Contact = () => {
return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail />
<h4>Email</h4>
<h5>paulocondori1@gmail.com</h5>
<a href="mailto:paulocondori1@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <MdOutlineMail />
<h4>Email</h4>
<h5>paulocondori1@gmail.com</h5>
<a href="https://m.me/ernest,achiever">Send a message</a>
          </article>

          <article className="contact_option">
            <MdOutlineMail />
<h4>Email</h4>
<h5>paulocondori1@gmail.com</h5>
<a href="mailto:paulocondori1@gmail.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact