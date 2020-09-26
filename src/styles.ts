import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  width: 100%;
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  color: #999;
  margin-top: 4px;
  font-weight: 400;
  width: 100%;
`;

export const Form = styled.form`
  margin-top: 20px;
  max-width: 584px;
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;

  input {
    flex: 1;
    height: 52px;
    padding: 0 24px;
    color: #3a3a3a;
    border-radius: 8px;
    border: 1px solid #f8f8f8;
    transition: border-color, box-shadow 0.2s;

    &:hover, :focus {
      border: 1px solid #9b51e0;
      box-shadow: 0px 0px 4px rgba(155, 81, 224, 0.3);
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 30px;
    padding: 0 10px;
    background: #F5EEFC;
    border-radius: 4px;
    right: 13px;
    position: absolute;
    color: #9b51e0;
    font-weight: bold;
    border: 1px solid #F5EEFC;
    transition: background-color 0.2;
    transition: color 0.2;

    &:hover {
      background-color: #9b51e0;
      color: #fff;
    }
  }
`;

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    background-color: #FCFCFC;
    min-height: 52px;
    max-height: 52px;
    padding: 13px 13px 13px 20px;
    color: #3a3a3a;
    border-radius: 8px;
    border: 1px solid #f8f8f8;
    transition: transform 0.2s;


  &:hover {
    transform: translateX(10px);

    svg {
      background-color: #9b51e0;
      stroke: #fff;
    }
  }

  svg {
    background-color: #F5EEFC;
    transition: background-color, stroke 0.2s;
    stroke: #9b51e0;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }
  }


`;
