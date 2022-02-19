import React from "react";
import "../style/contact.scss";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialGithubCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";

let year = new Date().getFullYear();
export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <p id='footer-copyright'>
            {year} Copyright © Daniel Pillay - Software Developer
          </p>

          <a href='https://danielpillay.com/contact'>
            <div className='social-container'>
              <a
                href='https://linkedin.com/in/danielpillay'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialLinkedinCircular
                  size={40}
                  className='contact-social-icon'
                  id='footer-social'
                />
              </a>
              <a
                href='https://github.com/dpillay03'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialGithubCircular
                  size={40}
                  className='contact-social-icon'
                  id='footer-social'
                />{" "}
              </a>
              <a
                href='https://instagram.com/dpillay3'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialInstagramCircular
                  size={40}
                  className='contact-social-icon'
                  id='footer-social'
                />
              </a>
              <a
                href='https://www.youtube.com/channel/UCCFoaR1kuuDhhHgSwD9j9Mw'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialYoutubeCircular
                  size={40}
                  className='contact-social-icon'
                  id='footer-social'
                />
              </a>
            </div>
          </a>
        </footer>
      </React.Fragment>
    );
  }
}
