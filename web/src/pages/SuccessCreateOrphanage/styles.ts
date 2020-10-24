import styled from 'styled-components';

export const Container = styled.div`
  background: #37c77f;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  max-width: 340px;
  font-family: 'Nunito', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 190px;

  h1 {
    font-size: 80px;
    font-weight: 800;
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
    font-weight: 700;
    margin-top: 20px;
    text-align: center;
  }

  a {
    width: 243px;
    height: 64px;
    background: #31b272;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    font-weight: 800;
    font-size: 18px;

    margin-top: 40px;
    border-radius: 20px;

    transition: background-color 0.2s;
  }

  a:hover {
    background: #3bd689;
  }
`;

export const ImageSuccess = styled.div``;
