import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Title from '../../components/title';
import FromControl from '../../components/form-control';
import FieldLabel from '../../components/field-label';
import FieldError from '../../components/field-error';
import TextField from '../../components/text-field';
import Button from '../../components/button';

import { LoginProps } from './props';
import { Container, TitleContainer, Form } from './styles';

type Inputs = {
  email: string,
  password: string,
};

const Login:React.FC<LoginProps> = () => {
  const history = useHistory();
  const { control, handleSubmit, errors } = useForm<Inputs>();

  const handleOnSubmit = (data: { email: string, password: string }) => {
    history.replace('/');
  };

  return (
  <Container>
    <TitleContainer>
      <Title>Agenda de Churrascos</Title>
    </TitleContainer>

    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <FromControl>
        <FieldLabel>Login</FieldLabel>
        <Controller
          as={TextField}
          name="email"
          placeholder="E-mail"
          control={control}
          defaultValue="churras@trin.ca"
          rules={{ required: { value: true, message: 'O campo e-mail é obrigatório' } }}
        />
        {errors.email && <FieldError>{errors.email?.message}</FieldError>}
      </FromControl>

      <FromControl>
        <FieldLabel>Senha</FieldLabel>
        <Controller
          type="password"
          as={TextField}
          name="password"
          placeholder="Senha"
          control={control}
          defaultValue="123456789"
          rules={{ required: { value: true, message: 'O campo senha é obrigatório' } }}
        />
        {errors.password && <FieldError>{errors.password?.message}</FieldError>}
      </FromControl>

      <Button type="submit">Entrar</Button>
    </Form>
  </Container>
);}

export default Login;
