import styled from 'styled-components';
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: rgba(0, 128, 128, 0.5);
  border-radius: 10px;
  padding: 15px;
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