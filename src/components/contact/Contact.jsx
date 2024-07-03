import React from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { ImInstagram } from 'react-icons/im';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    // Initialize EmailJS with your public key
    emailjs.init('odtUq4mKQT-PGHD3y');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bkprl1d', 'template_di6xvuh', form.current)
            .then(
                () => {
                    alert('Recived Your Details Contact You Soon!');
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5 className='text-light'>raval3250@gmail.com</h5>
                        <a href="mailto:raval3250@gmail.com" target='__blank'>Send A message</a>
                    </article>
                    <article className='contact__option'>
                        <ImInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5 className='text-light'>abhishek_raval_12</h5>
                        <a href="https://www.instagram.com/abhishek_raval_12" target='__blank'>Send A message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5 className='text-light'>+91 81604 12832</h5>
                        <a href="https://api.whatsapp.com/send?phone=918160412832" target='__blank'>Send A message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Full Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' value="Send" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
