import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 128, 128, 0.5);
  border-radius: 10px;
  padding: 15px;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;
export const Input = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: none;
  :hover,
  :focus {
    outline: 2px solid teal;
  }
`;
export const Button = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 8px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  background-color: teal;
  cursor: pointer;
  :focus,
  :hover {
    background-color: rgba(0, 128, 128, 0.8);
    transform: scale(1.1);
  }
`;
