import { Message } from './Notification.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

export const Notification = () => {
  const filter = useSelector(selectFilter);
  return <Message>{filter} not found</Message>;
};
