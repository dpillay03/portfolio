import React from "react";
import ContactForm from "../modules/ContactForm";
export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='content-wrapper'>
          <div className='two-col-container'>
            <div className='two-col'>
              <ContactForm />
            </div>
            <div className='two-col'>
              <h2>
                <span className='span-orange'>Name:</span>Daniel Pillay
              </h2>
              <h2>
                <span className='span-orange'>Location:</span>Honolulu, Hawaii
              </h2>
              <h2>
                <span className='span-orange'>Hometown:</span>Seattle,
                Washington
              </h2>
              <h2>
                <span className='span-orange'>Email:</span>dpillay03@gmail.com
              </h2>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
