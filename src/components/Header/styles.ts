import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 40px;

  header {
    padding-bottom: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;

            display: none;
          }

          .icon {
            display: flex;
            padding: 16px;
            background: #41c900;
            border-radius: 8px;
            margin: 0 auto;
          }
        }
      }
    }

    @media (min-width: 700px) {
      max-width: 1280px;
      width: 100%;

      flex-direction: row;
      
      justify-content: space-between;

      nav {
        div {
          button {
            .text {
              display: initial;
            }

            .icon {
              border-radius: 0 8px 8px 0;
            }
          }
        }
      }
    }
  }
`;
