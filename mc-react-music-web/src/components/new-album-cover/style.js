import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  .album-image {
    width: ${(props) => props.width};
    height: ${(props) => props.size};
    overflow: hidden;
    position: relative;
    margin-top: 15px;

    & > img {
      width: ${(props) => props.size};
      height: ${(props) => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-indent: -9999px;
      background-position: 0 ${(props) => props.bgp};
    }

    /* 播放器图标 */
    .play {
      position: absolute;
      right: 26px;
      bottom: 5px;
      width: 16px;
      height: 17px;
      background-position: 0 -60px;
      display: none;
    }
  }

  .album-image:hover {
    .play {
      display: block;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.width};

    .name {
      color: #000;
    }
    .artist {
      color: #666;
    }
    .name:hover,
    .artist:hover {
      text-decoration: underline;
    }
  }
`;
