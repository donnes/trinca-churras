import React from 'react';
import { FieldLabelProps } from './props';

import { Text } from './styles';

const FieldLabel: React.FC<FieldLabelProps> = ({ children }) => (
  <Text>{children}</Text>
);

export default FieldLabel;
