import React from 'react';
import { FormControlProps } from './props';

import { Container } from './styles';

const FormControl: React.FC<FormControlProps> = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default FormControl;
