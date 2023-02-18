import styled from 'styled-components';
import { skills } from '../data';

const Skills = () => {
  return (
    <Wrapper className='container'>
      {skills.map((singleSkill) => {
        const { id, skill, years } = singleSkill;
        return (
          <div className='skill-container' key={id}>
            <h2 className='skill'>{skill}</h2>
            <p className='years'>{years}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 58px;
  max-width: 1110px;
  height: fit-content;
  border-top: 1px solid #fff;
  top: 824px;
  left: 8%;
  padding-top: 72px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    width: 708px;
    height: 451px;
    left: 30px;
    top: 660px;
    row-gap: 52px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    width: 345px;
    height: 604px;
    left: 16px;
    top: 747px;
    row-gap: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #fff;
  }
  .skill-container {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 345px;
    height: 98px;
    @media (max-width: 650px) {
      width: 345px;
      height: 67px;
      gap: 1px;
    }
    .skill {
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -1.5px;
      color: #ffffff;
      @media (max-width: 650px) {
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        letter-spacing: -1px;
      }
    }
    .years {
      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
      color: #d9d9d9;
      @media (max-width: 650px) {
        font-size: 16px;
        line-height: 26px;
        text-align: center;
      }
    }
  }
`;

export default Skills;
