import { useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import ContactFilter from '../components/ContactFilter/ContactFilter';
export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      bgImage="url(https://cdn.pixabay.com/photo/2017/01/14/15/11/relaxing-1979674_1280.jpg)"
      w={['350px', '420px', '768px', '1024px', '1200px']}
      marginLeft="auto"
      marginRight="auto"
    >
      <ContactForm />
      <ContactFilter />
      <div>
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </div>
      <ContactList />
    </Box>
  );
}
