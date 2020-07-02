import React from 'react';
import { TextFieldProps } from './props';

import { Input } from './styles';

const TextField: React.FC<TextFieldProps> = (props) => <Input {...props} />;

export default TextField;
