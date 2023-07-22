import styled from '@emotion/styled';
export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 20px;
  }
`;
export const Button = styled.button`
  height: 25px;
  border-radius: 8px;
  color: white;
  background-color: seashell;
  color: brown;
  cursor: pointer;
  border: 1px solid black;
  font-size: 12px;
  height: 20px;
  @media screen and (min-width: 480px) {
    height: 25px;
    width: 65px;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 75px;
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    height: 35px;
    width: 100px;
    font-size: 20px;
  }
  :hover,
  :focus {
    background-color: red;
  }
`;
