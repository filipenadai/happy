import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

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

export const Branding = styled.section`
  height: 100%;
  background: #29b6d1;
  width: 100%;
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

  @media (max-width: 800px) {
    display: none;
  }
`;
export const Logon = styled.section`
  margin: 0 20px;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
  }

  > div {
    width: 100%;
    display: flex;
    min-width: 430px;
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

    a {
      margin-top: 20px;
      text-decoration: none;
      color: #5c8599;
      transition: color 0.2s;
    }

    a:hover {
      color: #29b6d1;
    }
  }
`;
