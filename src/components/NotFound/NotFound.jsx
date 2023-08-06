import { BsBoxArrowLeft } from 'react-icons/bs';
import { BackLink, Text } from './NotFound.styled.js';
import { Box } from 'components/Box.js';

export const NotFound = () => {
  return (
    <Box m="0 auto" p="70px 16px">
      <Text>Page is not found</Text>
      <BackLink to="/">
        <BsBoxArrowLeft size="28" />
        <p>Return to Homepage</p>
      </BackLink>
    </Box>
  );
};
