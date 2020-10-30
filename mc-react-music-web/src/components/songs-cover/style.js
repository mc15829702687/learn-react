import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px ${(props) => props.right || 0} 20px 0;

  .cover-top {
    position: relative;

    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        height: 27px;
        color: #ccc;
        padding: 0 10px;

        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          cursor: pointer;
        }
        .play:hover {
          background-position: 0 -60px;
        }
      }
    }
  }

  .cover-bottom {
    color: #000;
    font-size: 14px;
    margin-top: 5px;
    cursor: pointer;
  }
  .cover-bottom:hover {
    text-decoration: underline;
  }
  .cover-source {
    color: #666;
  }
`;
