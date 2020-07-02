import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-image:
    linear-gradient(0deg, ${({ theme }) => theme.colors.primary} 60%, rgba(255,255,255,0) 100%),
    url(${require('../../assets/bg-pattern.svg')});
  background-position: center;
`;

export const TitleContainer = styled.div`
  padding: 70px 0 100px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 40px;

  @media only screen and (min-width: 768px) {
    padding: 0px 120px;
  }

  @media only screen and (min-width: 900px) {
    padding: 0px 30%;
  }

  @media only screen and (min-width: 1600px) {
    padding: 0px 40%;
  }
`;
