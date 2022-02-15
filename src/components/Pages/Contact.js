import React from "react";
import ContactForm from "../ContactForm.js";
import "../../style/contact.scss";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialGithubCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";

export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id='page' className='contact-page'>
          <h1 className='section-titles'>LET'S GET IN TOUCH!</h1>
          <div className='social-container'>
            <a
              href='https://linkedin.com/in/danielpillay'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialLinkedinCircular
                size={50}
                className='contact-social-icon'
              />
            </a>
            <a
              href='https://github.com/dpillay03'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialGithubCircular
                size={50}
                className='contact-social-icon'
              />{" "}
            </a>
            <a
              href='https://instagram.com/dpillay3'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialInstagramCircular
                size={50}
                className='contact-social-icon'
              />
            </a>
            <a
              href='https://www.youtube.com/channel/UCCFoaR1kuuDhhHgSwD9j9Mw'
              target='_blank'
              rel='noreferrer'
            >
              <TiSocialYoutubeCircular
                size={50}
                className='contact-social-icon'
              />
            </a>
          </div>
          <ContactForm />
        </section>
      </React.Fragment>
    );
  }
}
