import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-between;
  }

  /* 分割线 */
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;

    .select-item {
      font-size: 14px;

      a {
        color: #ccc;
        display: block;
        line-height: 70px;
        padding: 0 19px;
        position: relative;
      }

      :last-of-type a {
        ::after {
          content: '';
          position: absolute;
          width: 28px;
          height: 19px;
          top: 20px;
          right: -15px;
          background: url(${require('@/assets/img/sprite_01.png')}) no-repeat;
          background-position: -190px 0;
        }
      }

      a:hover,
      a.active {
        background-color: #000;
        color: #fff;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        bottom: -1px;
        background-position: -226px 0;
        width: 12px;
        height: 7px;
        left: 50%;
        margin-left: -6px;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #ccc;

  /* 搜索框 */
  .search {
    width: 158px;
    height: 32px;
    background-color: #fff;
    border-radius: 32px;

    .ant-input, .ant-input::placeholder {
      font-size: 12px;
      line-height: 16px;
    }
  }

  /* 创作者中心 */
  .center {
    height: 32px;
    width: 90px;
    margin: 0 20px;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    line-height: 33px;
    text-align: center;
  }

  /* 登录 */
  .login {
    color: #787878;
  }
`