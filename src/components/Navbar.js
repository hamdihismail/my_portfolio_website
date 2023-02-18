import styled from 'styled-components';
import { social } from '../data';
const Navbar = () => {
  return (
    <NavContainer>
      <h3 className='nav-header'>hamdiIsmail</h3>
      <div className='logo'></div>
      <div className='icon-container'>
        {social.map((i) => {
          const { icon, id, url } = i;
          return (
            <a
              className='icon'
              target='_blank'
              rel='noreferrer'
              key={id}
              href={url}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  max-width: 100%;
  padding: 0 18% 0 8%;
  z-index: 10;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0;
    left: 111px;
    top: 20px;
    gap: 20px;
  }
  .nav-header {
    display: none;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.444444px;
    color: #ffffff;
    @media (max-width: 650px) {
      display: block;
    }
  }
  .logo {
    position: relative;
    bottom: 50px;
    @media (max-width: 650px) {
      display: none;
    }
  }
  .icon-container {
    display: flex;
    gap: 32px;
    color: #ffffff;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
`;

export default Navbar;
