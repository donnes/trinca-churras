import styled from 'styled-components';

export const Touchable = styled.button`
  height: 50px;
  padding: 0px 20px;
  border-radius: 18px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
`;
