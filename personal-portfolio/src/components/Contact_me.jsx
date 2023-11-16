import React from "react";
import Lottie from "lottie-react";
import canime from "./ContactUs.json";
import styles from "../style";
import "./contact_me.css";

function Contact() {
  return (
    <section
      id='contact'
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} font-poppins sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow`}
    >
      <div className='contact'>
        <div className='left_contact'>
          <div className='contact_h'>Contact Me</div>
          <br />

          <div className='form_contact'>
            <form action='https://submit-form.com/9k1uE706' className='f_con'>
              <input
                type='hidden'
                name='_redirect'
                value=' '
              />
              <div className='input_wrap'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name'
                  required=''
                  className='name_field'
                />
              </div>
              <div className='input_wrap'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  required=''
                  className='name_field'
                />
              </div>
              <div className='input_wrap'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Message'
                  required=''
                  className='name_field'
                ></textarea>
              </div>
              <button type='submit' className='form_sbt'>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className='right_contact'>
          <Lottie
            animationData={canime}
            loop={true}
            className='c_anime hidden md:block'
          />
          ;
        </div>
      </div>
    </section>
  );
}

export default Contact;
