import styled from "styled-components";

export const DisCoverWrapper = styled.div`
  .top {
    height: 35px;
    background-color: #c20c0c;
  }
`;
export const TopMenu = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 180px;

  .item {
    height: 34px;

    a {
      text-align: center;
      display: inline-block;
      height: 20px;
      padding: 0 13px;
      line-height: 20px;
      margin: 7px 17px 0;
      color: #fff;
    }
    a:hover,
    a.active {
      background-color: #9b0909;
      border-radius: 20px;
    }
  }
`;
