import Contact from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Wrapper>
      <div className='circle'></div>
      <div className='rings'></div>
      <div className='profile-img'></div>
      <div className='rings-2'></div>
      <div className='rings-3'></div>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  padding-top: 39px;
  max-width: 2000px;
  height: 3872px;
  /* display: flex;
  flex-direction: column; */
  background: hsla(0, 0%, 8%, 1);
  overflow-x: hidden;
  @media (max-width: 800px) {
    height: 3568px;
  }
  @media (max-width: 650px) {
    position: absolute;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    overflow-y: hidden;
    height: 4000px;

    /* height: 5013px; */
  }
  .circle {
    position: absolute;
    width: 129px;
    height: 129px;
    left: 48%;
    top: 521px;
    @media (max-width: 800px) {
      /* left: 702px;
      top: 471px; */
      left: 680px;
      top: 371px;
    }
    @media (max-width: 650px) {
      left: 311px;
      top: 254px;
    }
  }
  .rings {
    position: absolute;
    width: 530px;
    height: 129px;
    left: -100px;
    top: 133px;
    opacity: 0.5;
    @media (max-width: 800px) {
      left: -265px;
      top: 86px;
    }
    @media (max-width: 650px) {
      left: -342px;
      top: 124px;
    }
  }
  .profile-img {
    position: absolute;
    width: 445px;
    /* height: 720px; */
    height: 450px;
    left: 52%;
    top: 200px;
    border-radius: 50%;
    opacity: 0.6;
    @media (max-width: 800px) {
      /* width: 322px;
      height: 600px; */
      width: 330px;
      height: 330px;
      left: 445.56px;
      top: 125px;
    }
    @media (max-width: 650px) {
      left: 30px;
      top: 100px;
    }
  }
  .rings-2 {
    position: absolute;
    width: 530px;
    height: 129px;
    left: 1149px;
    top: 1077px;
    opacity: 0.5;
    @media (max-width: 800px) {
      left: 570px;
      top: 1047px;
    }
    @media (max-width: 650px) {
      left: 189px;
      top: 1287px;
    }
  }
  .rings-3 {
    position: absolute;
    width: 530px;
    height: 129px;
    left: -205px;
    top: 3524px;
    opacity: 0.5;
    z-index: 10;
    @media (max-width: 800px) {
      left: -368px;
      top: 3304px;
    }
    @media (max-width: 650px) {
      /* position: relative; */
      left: -343px;
      top: 91.7%;
      /* bottom: 100px; */
    }
  }
`;

export default HomePage;
