import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { ContactItem } from './ContactItem.styled';
import { Box } from 'components/Box';
import { ContactName, ContactNumber, DeleteBtn } from './ContactItem.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() =>
        toast.success('Contact is deleted', {
          duration: 3000,
          position: 'top-center',
          style: {
            width: '280px',
            height: '60px',
            fontSize: '18px',
          },
        })
      )
      .catch(() =>
        toast.error('Something went wrong... Please, try again', {
          duration: 3000,
          position: 'top-center',
          style: {
            width: '280px',
            height: '60px',
            fontSize: '18px',
          },
        })
      );
  };

  return (
    <ContactItem>
      <Box>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </Box>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
