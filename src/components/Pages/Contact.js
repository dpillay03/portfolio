import React from "react";
import ContactForm from "../modules/ContactForm";
import { BsPerson, BsBriefcase } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

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
              <h2 className='contact-orange-bio' style={{ color: "#fff" }}>
                <BsPerson
                  size={50}
                  style={{
                    marginRight: "20px",
                    verticalAlign: "middle",
                    color: "#FF651C",
                  }}
                />
                Daniel Pillay
              </h2>
              <h2 className='contact-orange-bio' style={{ color: "#fff" }}>
                <GoLocation
                  size={50}
                  style={{
                    marginRight: "20px",
                    verticalAlign: "middle",
                    color: "#FF651C",
                  }}
                />
                Honolulu, Hawaii
              </h2>
              <h2 className='contact-orange-bio' style={{ color: "#fff" }}>
                <BsBriefcase
                  size={50}
                  style={{
                    marginRight: "20px",
                    verticalAlign: "middle",
                    color: "#FF651C",
                  }}
                />
                Software Engineer - UI/UX
              </h2>
              <h2 className='contact-orange-bio' style={{ color: "#fff" }}>
                <AiOutlineMail
                  size={50}
                  style={{
                    marginRight: "20px",
                    verticalAlign: "middle",
                    color: "#FF651C",
                  }}
                />
                dpillay03@gmail.com
              </h2>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
