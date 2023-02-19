// import { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const onNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const onEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const onMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };
  return (
    <Wrapper id='contact'>
      <div className='contact-container'>
        <div className='info'>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className='form'
            type='text'
            name='name'
            placeholder='NAME'
            // onChange={onNameChange}
          />
          <input
            className='form'
            type='email'
            name='email'
            placeholder='EMAIL'
            // onChange={onEmailChange}
          />
          <textarea
            className='form msg'
            name='message'
            cols='30'
            rows='10'
            placeholder='MESSAGE'
            // onChange={onMessageChange}
          ></textarea>
          <button type='submit' className='contact'>
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className='footer'>
        <Navbar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  bottom: 0;
  max-width: 1440px;
  height: 675px;
  left: 0px;
  background: #242424;
  padding: 0 18% 95px 2%;
  overflow: hidden;
  @media (max-width: 1180px) {
    max-width: 768px;
    height: 806px;
  }
  @media (max-width: 650px) {
    width: 375px;
    height: 834px;
    padding-top: 80px;
    justify-content: flex-start;

    /* left: 0px;
    top: 4179px; */
  }
  .contact-container {
    display: flex;
    align-items: flex-start;
    width: 1110px;
    height: 420px;
    border-bottom: 1px solid #fff;
    margin-left: 165px;
    margin-bottom: 47px;
    gap: 220px;
    @media (max-width: 1180px) {
      flex-direction: column;
      justify-content: center;
      max-width: 768px;
      height: 806px;
      gap: 48px;
      margin-left: 162px;
      border-bottom: none;
    }
    @media (max-width: 650px) {
      top: 60px;
      width: 343px;
      height: 515px;
      margin-left: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      width: 445px;
      gap: 36px;
      @media (max-width: 1180px) {
        gap: 20px;
      }
      @media (max-width: 650px) {
        width: 343px;
      }
      h1 {
        font-weight: 700;
        font-size: 88px;
        line-height: 88px;
        letter-spacing: -2.5px;
        color: #ffffff;
        @media (max-width: 1180px) {
          font-weight: 700;
          font-size: 72px;
          line-height: 72px;
          text-align: center;
          letter-spacing: -2.04545px;
        }
        @media (max-width: 650px) {
          font-size: 40px;
          line-height: 40px;
          text-align: center;
          letter-spacing: -1.13636px;
        }
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 1px;
        color: #d9d9d9;
        @media (max-width: 1180px) {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          text-align: center;
        }
        @media (max-width: 650px) {
          font-size: 16px;
          line-height: 26px;
          text-align: center;
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 445px;
      height: 327px;
      @media (max-width: 650px) {
        width: 343px;
        height: 327px;
      }
      input {
        height: 43px;
        padding-left: 24px;
        padding-bottom: 16px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.222222px;
        color: #ffffff;
        opacity: 1.2;
      }
      .msg {
        padding-left: 24px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.222222px;
        color: #ffffff;
        opacity: 1.2;
      }
      .contact {
        align-self: flex-end;
      }
    }
  }

  nav {
    padding-left: 12%;
    @media (max-width: 1180px) {
      max-width: 708.49px;
      height: 63px;
      padding: 15px 29.51px 0 30px;
      border-top: 1px solid #fff;
      bottom: 0px;
      left: 30px;
      gap: 310px;
    }
    @media (max-width: 650px) {
      /* width: 343px; */
      width: 313px;
      height: 112px;
      padding-top: 39px;
      top: 702px;
      bottom: 60px;
      gap: 20px;
      align-items: center;
    }
    .icon-top {
      @media (max-width: 650px) {
        padding-left: 0;
      }
    }
  }
`;

export default Contact;
