import styled from 'styled-components';
export const ListItem = styled.li`
  display: flex;
  gap: 8px;
  border: 1px solid #FFDEAD;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 3px;
  display: flex;
  margin-left: auto;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  line-height: 1.2;
  background-color: #F4A460;
  cursor: pointer;
  :focus,
  :hover {
    background-color: #A52A2A;
    transform: scale(1.1);
  }
`;