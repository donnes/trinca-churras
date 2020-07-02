import React from 'react';
import { TitleProps } from './props';

import { H1 } from './styles';

const Title: React.FC<TitleProps> = ({ children }) => (
  <H1>{children}</H1>
);

export default Title;
