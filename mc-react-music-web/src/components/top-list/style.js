import styled from "styled-components";

export const TopListWrapper = styled.div`
  width: 230px;

  .header {
    display: flex;
    padding: 20px 0 0 19px;
    height: 100px;

    .image {
      width: 80px;
      height: 80px;
      position: relative;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      margin: 6px 0 0 10px;
      width: 116px;

      .name {
        font-size: 14px;
        color: #333;
        font-weight: bold;
      }

      .btn {
        margin: 8px 10px 0 0;
        width: 22px;
        height: 22px;
        padding: 0;
        display: inline-block;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }
      .addto {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    .list-item {
      display: flex;
      align-items: center;
      height: 32px;
      line-height: 32px;

      .ranking {
        width: 35px;
      }
    }
  }
`;
