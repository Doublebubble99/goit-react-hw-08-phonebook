import styled from '@emotion/styled';
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: teal;
  margin-bottom: 10px;
  height: 35px;
  align-items: center;
  padding: 10px;
  border-radius: 12px;
  border: 2px solid brown;
  width: 250px;
  @media screen and (min-width: 480px) {
    height: 45px;
    padding: 15px;
    margin-bottom: 15px;
    width: 425px;
  }
  @media screen and (min-width: 768px) {
    height: 55px;
    padding: 15px;
    margin-bottom: 15px;
    width: 650px;
  }
  @media screen and (min-width: 1200px) {
    height: 65px;
    padding: 20px;
    margin-bottom: 20px;
    width: 900px;
  }
`;
export const Info = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(24 / 20);
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`;
