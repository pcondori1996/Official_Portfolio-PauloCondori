import React from 'react'
import './contact.scss'
import {MdOutlineMail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

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
            <BsFacebook />
<h4>Facebook</h4>
<h5>My profile</h5>
<a href="https://m.me/ernest,achiever">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp />
<h4>Whatsapp</h4>
<h5>To my account</h5>
<a href="https://api.whatsapp.com/send?phone+">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact