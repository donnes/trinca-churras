import React from 'react';
import { ButtonProps } from './props';

import { Touchable } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Touchable {...props}>{children}</Touchable>
);

export default Button;
