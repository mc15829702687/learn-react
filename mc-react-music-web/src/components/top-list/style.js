import styled from "styled-components";

export const TopListWrapper = styled.div`
  flex: 1;

  .header {
    display: flex;
    padding: 20px 0 0 20px;
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
    margin-top: 18px;
    .list-item {
      display: flex;
      align-items: center;
      height: 32px;
      position: relative;

      :nth-child(-n + 3) .ranking {
        color: #c10d0c;
      }
      .ranking {
        width: 35px;
        text-align: center;
        padding-left: 10px;
        font-size: 16px;
      }

      .info {
        display: flex;
        justify-content: space-between;
        width: 185px;
        color: #000;
        height: 17px;
        line-height: 17px;

        .name {
          flex: 1;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .operate {
          display: flex;
          width: 83px;
          align-items: center;
          display: none;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
          }
          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }
          .favor {
            background-position: -297px -268px;
          }
        }
      }
      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }
  .footer {
    height: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 32px;
    a {
      color: #000;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
