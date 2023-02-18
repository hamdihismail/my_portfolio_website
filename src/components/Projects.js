import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { projects } from '../data';

const Projects = () => {
  const [screenSize, setScreenSize] = useState(window.screen.width);

  const showOverlay = (e) => {
    if (e.target.className !== 'VIEW-PROJECT') {
      e.target.classList.remove('hide');
      e.target.classList.add('show');
    }
  };
  const hideOverlay = (e) => {
    if (e.target.className.contains !== 'VIEW') {
      e.target.classList.remove('show');
      e.target.classList.add('hide');
    }
  };
  // const currentScreen = () => {
  //   window.addEventListener('resize', () => {
  //     if (screenSize === window.screen.width) return;
  //     else {
  //       setScreenSize(window.screen.width);
  //     }
  //   });
  // };
  useEffect(() => {
    const currentScreen = () => {
      window.addEventListener('resize', () => {
        if (screenSize === window.screen.width) return;
        else {
          setScreenSize(window.screen.width);
        }
      });
    };
    currentScreen();
  }, [screenSize]);
  return (
    <Wrapper>
      <header>
        <h1>Projects</h1>
        <a href='#contact' className='contact'>
          CONTACT ME
        </a>
      </header>
      <div className='projects-container'>
        {projects.map((singleProject) => {
          const {
            id,
            image_large,
            image_small,
            name,
            tech,
            code_url: code,
            project_url: project,
          } = singleProject;
          // console.log(screenSize);
          return (
            <div className='single-project-container' key={id}>
              <div
                className='overlay hide'
                onMouseOver={showOverlay}
                onMouseLeave={hideOverlay}
              >
                <a
                  href={project}
                  target='_blank'
                  rel='noreferrer'
                  className='view-project'
                >
                  VIEW PROJECT
                </a>
                <a
                  href={code}
                  target='_blank'
                  rel='noreferrer'
                  className='view-code'
                >
                  VIEW CODE
                </a>
              </div>
              <div className='single-project'>
                <img
                  src={screenSize < 1000 ? image_small : image_large}
                  alt={name}
                />
                <div className='project-info-container'>
                  <h4 className='project-name'>{name}</h4>
                  <p className='project-tech'>{tech}</p>
                  <div className='view-container'>
                    <a
                      href={project}
                      target='_blank'
                      rel='noreferrer'
                      className='mobile-view-project'
                    >
                      VIEW PROJECT
                    </a>
                    <a
                      href={code}
                      target='_blank'
                      rel='noreferrer'
                      className='mobile-view-code'
                    >
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 1291px;
  left: 8%;
  max-width: 1110px;
  height: fit-content;
  @media (max-width: 800px) {
    width: 708px;
    height: 1314px;
    left: 30px;
    top: 1211px;
  }
  @media (max-width: 650px) {
    width: 343px;
    left: 16px;
    top: 1431px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 1110px;
    margin-bottom: 80px;
    @media (max-width: 1200px) {
      max-width: 90vw;
    }
    @media (max-width: 800px) {
      margin-bottom: 60px;
    }
    @media (max-width: 650px) {
      margin-bottom: 40px;
    }
    h1 {
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -2.5px;
      color: #ffffff;
      @media (max-width: 800px) {
        font-size: 72px;
        line-height: 72px;
        letter-spacing: -2.04545px;
      }
      @media (max-width: 650px) {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.13636px;
      }
    }
  }
  .projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 30px;
    row-gap: 69px;
    height: fit-content;
    @media (max-width: 800px) {
      column-gap: 24px;
      row-gap: 60px;
    }
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
    .single-project-container {
      width: 540px;
      height: 487px;
      overflow: hidden;
      @media (max-width: 800px) {
        width: 342px;
        height: 398px;
      }
      .overlay {
        position: absolute;
        display: block;
        /* width: inherit;
        height: inherit; */
        width: 540px;
        height: 400px;
        background: rgb(0, 0, 0);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 138px 201px;
        gap: 48px;
        z-index: 10;
        transition: all 0.3s ease-in-out;
        @media (max-width: 800px) {
          display: none;
        }

        .view-project {
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: 2.28571px;
          border-bottom: 2px solid hsla(154, 71%, 59%, 1);
          padding-bottom: 10px;
          opacity: 1;
          :hover {
            color: hsla(154, 100%, 59%, 1);
          }
        }
        .view-code {
          width: fit-content;
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: 2.28571px;
          border-bottom: 2px solid hsla(154, 71%, 59%, 1);
          padding-bottom: 10px;
          margin-left: 18px;
          margin-right: 17px;
          opacity: 1;
          :hover {
            color: hsla(154, 100%, 59%, 1);
          }
        }
      }
      .single-project {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: inherit;
        height: inherit;
        /* width: 540px;
        height: 487px; */
        .project-img {
          width: 540px;
          height: 400px;
        }
        .project-info-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 67px;
          .project-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: #ffffff;
            @media (max-width: 800px) {
              margin-bottom: 7px;
            }
          }
          .project-tech {
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #d9d9d9;
          }
          .view-container {
            margin-top: 20px;
            display: flex;
            gap: 30px;
          }
          .mobile-view-project {
            display: none;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 2.28571px;
            color: #ffffff;
            border-bottom: 2px solid hsla(154, 71%, 59%, 1);
            padding-bottom: 10px;
            :hover {
              color: hsla(154, 100%, 59%, 1);
            }
            @media (max-width: 800px) {
              display: block;
            }
          }
          .mobile-view-code {
            display: none;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 2.28571px;
            color: #ffffff;
            border-bottom: 2px solid hsla(154, 71%, 59%, 1);
            padding-bottom: 10px;
            :hover {
              color: hsla(154, 100%, 59%, 1);
            }
            @media (max-width: 800px) {
              display: block;
            }
          }
        }
      }
    }
  }
`;

export default Projects;
