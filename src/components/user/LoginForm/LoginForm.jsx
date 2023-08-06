import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Box } from 'components/Box';
import { Form, LoginLabel, LoginInput, LoginBtn } from './LoginForm.styled';
import { toast } from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
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

    dispatch(login({ email, password }))
      .unwrap()
      .then()
      .catch(() =>
        toast.error('Wrong email or password. Please, try again!', {
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
        <LoginLabel>
          Email
          <LoginInput type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginBtn type="submit">Login</LoginBtn>
      </Form>
    </Box>
  );
};
