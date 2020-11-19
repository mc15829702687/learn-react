import styled from "styled-components";

export const AppPlayBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  z-index: 99;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    justify-content: space-between;
    height: 47px;
    align-items: center;
  }
`;

// 工具栏
export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }
  .prev:hover,
  .next:hover,
  .play:hover {
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
  }
  .next {
    background-position: -80px -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 -204px;
  }
`;

// 播放
export const PlayInfo = styled.div`
  display: flex;
  align-items: center;
  width: 680px;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }
  .info {
    margin-left: 10px;
    color: #a1a1a1;

    .song {
      position: relative;
      left: 8px;
      top: 8px;
      color: #e1e1e1;

      .singer-name {
        margin-left: 10px;
        color: #a1a1a1;
      }
    }

    .progress {
      display: flex;
      align-items: center; 
      
      /* antd进度条 */
      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(/static/media/sprite_icon.de77152c.png) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    .favor {
      background-position: -88px -163px;
    }
    .share {
      background-position: -114px -163px;
    }
  }

  .right {
    padding-left: 13px;
    background-position: -147px -248px;
    display: flex;
    align-items: center;

    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: -3px -344px;
    }
    .playlist {
      background-position: -42px -68px;
      width: 59px;
      color: #ccc;
      text-align: center;
      padding-left: 18px;
    }
  }
`;
