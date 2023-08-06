import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { MdContactPhone } from 'react-icons/md';
import { useMedia } from 'react-use';
import { UserMenu } from 'components/user/UserMenu/UserMenu';
import { Auth } from 'components/user/Auth/Auth';
import {
  Header,
  Navigation,
  ContactLink,
  HomeLink,
  HomeText,
  Icon,
} from './Layout.styled';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const mobile = useMedia('(max-width: 767px)');

  return (
    <Box padding="0px 20px" maxWidth="1280px" margin="0 auto">
      <Header>
        <Navigation>
          <HomeLink to="/">
            {!isLoggedIn && mobile && <HomeText>PhoneBook</HomeText>}
            {isLoggedIn && mobile && <Icon size="38" />}
            {!mobile && (
              <>
                <Icon size="38" />
                <HomeText>PhoneBook</HomeText>
              </>
            )}
          </HomeLink>
          {isLoggedIn && <ContactLink to="/contacts">Contacts</ContactLink>}
          {isLoggedIn ? <UserMenu /> : <Auth />}
        </Navigation>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
