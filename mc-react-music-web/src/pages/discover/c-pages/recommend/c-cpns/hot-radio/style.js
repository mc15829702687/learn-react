import styled from 'styled-components';

export const HotRadioWrapper = styled.div`
  padding: 20px;

  .hot-radio-list {
    margin-top: 20px;
    .item {
      display: flex;
      margin-bottom: 10px;

      .info {
        margin-left: 10px;
        width: 160px;

        .name {
          color: #333;
          font-weight: 700;
        }
        .title {
          color: #666;
        }
      }
    }
  }
`