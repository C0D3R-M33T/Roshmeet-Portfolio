import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I'm currently looking for short period Internship offers. <br /> If you want your job done, just drop a dm in my whatsapp inbox<br /> Any further queries about me and my skills, feel free to get in touch. <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+917044529443");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© C0D3R_M33T.</p>
      </Container>
    </div>
  )
}

export default Contactpage