import styled from 'styled-components';

export const Text = styled.span`
  font-size: 21px;
  font-weight: bold;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
`;
