import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h1 className='header-intro'>
        Nice to meet you! I’m <span className='underline'>Hamdi Ismail</span>.
      </h1>
      <p className='header-text'>
        Based in Canada, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <a href='#contact' className='contact'>
        CONTACT ME
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 706px;
  height: fit-content;
  top: 198px;
  left: 8%;
  @media (max-width: 800px) {
    max-width: 445px;
    /* height: 449px; */
    height: fit-content;
    left: 32px;
    top: 151px;
    align-items: center;
  }
  @media (max-width: 650px) {
    width: 343px;
    height: fit-content;
    left: 16px;
    top: 423px;
  }
  .header-intro {
    margin-bottom: 43px;
    font-weight: 700;
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
    color: #ffffff;
    @media (max-width: 800px) {
      font-size: 72px;
      line-height: 72px;
      letter-spacing: -2.04545px;
      margin-bottom: 60px;
    }
    @media (max-width: 650px) {
      font-weight: 700;
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -1.13636px;
      margin-bottom: 24px;
    }
    .underline {
      border-bottom: 7px solid hsla(154, 71%, 59%, 1);
      @media (max-width: 650px) {
        border-bottom: 4px solid hsla(154, 71%, 59%, 1);
      }
    }
  }
  .header-text {
    max-width: 445px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #d9d9d9;
    margin-bottom: 66px;
    @media (max-width: 800px) {
      margin-bottom: 34px;
    }
    @media (max-width: 650px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
`;

export default Header;
