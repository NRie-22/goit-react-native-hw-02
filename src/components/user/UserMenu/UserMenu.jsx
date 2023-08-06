import { Container, User, LogOutBtn } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <User>Hi, {user.name}!</User>
      <LogOutBtn type="button" onClick={handleLogOut}>
        Log out
      </LogOutBtn>
    </Container>
  );
};
