import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
    }
    .arrow-left:hover {
      background-position: -280px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }
    .arrow-right:hover {
      background-position: -320px -75px;
    }

    .album {
      width: 640px;
      height: 150px;
      margin-left: 5px;

      .page {
        align-items: center;
        justify-content: space-between;
        display: flex !important;
      }
    }
  }
`;
