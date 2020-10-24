import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    background: #ebf2f5;

    position: absolute;
    right: 40px;
    top: 40px;

    height: 48px;
    width: 48px;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  > a:hover {
    background-color: #17d6eb;
  }

`;
export const Branding = styled.div`
  height: 100%;
  background: #29b6d1;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  strong {
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 800;
    margin-top: 80px;
  }
`;
export const Logon = styled.div`
  height: 100%;
  background: #fff;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  > div {
    width: 100%;
    max-width: 430px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 32px;
      color: #5c8599;
      margin-bottom: 40px;
    }

    input,
    textarea {
      width: 100%;
      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      border-radius: 20px;
      outline: none;
      color: #5c8599;
    }

   > input {
      height: 64px;
      padding: 0 16px;

      & + input {
        margin-top: 20px;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      width: 100%;

      > label {
        color: #5c8599;
        display: flex;
        flex: 1;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;

        input {
          margin-right: 10px;
          height: 20px;
          width: 20px;
        }

      }

      > a {
        font-family: 'Nunito', sans-serif;
        color: #5c8599;
        text-decoration: none;
      }
    }


  }

`;
