import React from 'react';
import { FieldErrorProps } from './props';

import { Text } from './styles';

const FieldError: React.FC<FieldErrorProps> = ({ children }) => (
  <Text>{children}</Text>
);

export default FieldError;
