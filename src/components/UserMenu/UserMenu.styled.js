import styled from 'styled-components';
export const Container = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  // align-items: center;
  // display: block;
  // justify-content: center;
  margin: 0 auto;
  // padding: 6px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  // line-height: 1.2;
  background-color: rgb(244, 164, 96);
  cursor: pointer;
  :focus,
  :hover {
    background-color: rgb(210, 105, 30);
    transform: scale(1.1);
  }
`;
export const Welcome = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
