import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';
import { Form, ContactLabel, ContactInput, AddBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const addedName = form.elements.name.value;
    const addedNumber = form.elements.number.value;

    if (contacts.find(contact => contact.name === addedName)) {
      toast.error(`${addedName} is already in contacts`, {
        duration: 3000,
        position: 'top-center',
        style: {
          width: '280px',
          height: '60px',
          fontSize: '18px',
        },
      });
    } else {
      dispatch(addContact({ name: addedName, number: addedNumber }))
        .unwrap()
        .then(() =>
          toast.success('Contact is added', {
            duration: 3000,
            position: 'top-center',
            style: {
              width: '280px',
              height: '60px',
              fontSize: '18px',
            },
          })
        );
    }

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContactLabel>
        Name
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactLabel>
      <ContactLabel>
        Number
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactLabel>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};
