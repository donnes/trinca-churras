import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 1;
  height: 50px;
  padding: 0px 20px;
  border-radius: 2px;
  font-size: 18px;
  font-style: italic;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;
