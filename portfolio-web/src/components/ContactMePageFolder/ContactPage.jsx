import React, {forwardRef} from 'react';
import GlitchText from '../GlitchText';
import ContactForm from './ContactForm';
import LinkList from './LinkList';
import Footer from '../Footer';
import './Contact.scss';

const ContactPage = forwardRef((props, ref) => {
const links = [{
    alt:'Github',
    src: '/Logos/GithubLogo.png',
    link: 'https://github.com/Sophiak113'
},
{
    alt:'LinkedIn',
    src: '/Logos/LinkedInLogo.png',
    link: 'https://www.linkedin.com/in/sophia-kinsey-2057871a2/'
}
]
  return (
    <div className='contact-container' ref={ref}>
      <div className='header-container'>
            <div className='header-wrapper'>
                {/* <img src="/ContactMeHeader.png" alt="Contact Me" /> */}
                <GlitchText tag='h3'text='CONTACT ME'></GlitchText>
            </div>
        </div>
      <div className="contact-body-container">
        <div className="contact-form-container">
          {/* <h2>Send me an email</h2> */}
          <GlitchText tag='h2' text='SEND ME AN EMAIL'></GlitchText>

          <ContactForm></ContactForm>
        </div>
        <div className="links-container">
          {/* <h2>Links</h2> */}
          <GlitchText tag='h2' text='LINKS'></GlitchText>
          <LinkList links={links} />
        </div>
      </div>


    </div>
  )
});

export default ContactPage
