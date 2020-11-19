import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  padding: 16px 22px;
  background-position: 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > p {
    line-height: 25px;
  }

  a {
    margin-top: 10px;
    background-position: 0 -195px;
    width: 100px;
    line-height: 31px;
    height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
  }
`