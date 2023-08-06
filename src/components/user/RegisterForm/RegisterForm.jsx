import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from 'components/Box';
import {
  Form,
  RegisterLabel,
  RegisterInput,
  RegisterBtn,
} from './RegisterForm.styled';
import { toast } from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '' || email === '') {
      toast.error('Please, fill all fields', {
        duration: 4000,
        position: 'top-center',
        style: {
          width: '280px',
          height: '60px',
          fontSize: '18px',
        },
      });
      return;
    }

    dispatch(register({ name, email, password }))
      .unwrap()
      .then()
      .catch(() =>
        toast.error('Account has already been registered at this email', {
          duration: 4000,
          position: 'top-center',
          style: {
            width: '280px',
            height: '60px',
            fontSize: '18px',
          },
        })
      );
    form.reset();
  };

  return (
    <Box pt="70px">
      <Form onSubmit={handleSubmit}>
        <RegisterLabel>
          Name
          <RegisterInput type="text" name="username" />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterInput type="email" name="email" />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterInput type="password" name="password" />
        </RegisterLabel>
        <RegisterBtn type="submit">Sign up</RegisterBtn>
      </Form>
    </Box>
  );
};
