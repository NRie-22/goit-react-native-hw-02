import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from 'GlobalStyles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';

const HomePage = lazy(() => import('pages/Home/Home'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefresh && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}

      <Toaster />
      <GlobalStyle />
    </>
  );
};
