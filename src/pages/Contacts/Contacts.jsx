import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Box } from 'components/Box';
import { Subtitle, ContactWrap, Loading } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operation';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactWrap>
      <Box>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        {isLoading && !error && <Loading>Loading...</Loading>}
        <ContactList />
      </Box>
      <Box>
        <Subtitle>Add contact</Subtitle>
        <ContactForm />
      </Box>
    </ContactWrap>
  );
};

export default Contacts;
