import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      margin-top: 14px;
      display: flex;
      background-color: #fafafa;
      height: 62px;

      .img {
        width: 62px;
        height: 62px;
      }
      .info {
        margin: 8px 0 0 10px;

        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }
        .name {
          margin-top: 5px;
        }
      }
    }
  }

  /* 申请 */
  .apply-for {
    margin-top: 12px;
    & > a {
      display: block;
      height: 31px;
      line-height: 31px;
      font-weight: 700;
      color: #333;
      text-align: center;
      background-color: #f5f5f5;
      border-radius: 4px;
      border: 1px solid #c3c3c3;
    }
  }
`;
