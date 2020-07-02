import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
