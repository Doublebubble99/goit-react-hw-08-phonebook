import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import ContactItem from 'components/ContactItem';
import { List, Button } from './ContactList.styled';
import { contacts, filters } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
function ContactList() {
  const { items } = useSelector(contacts);
  const filtersState = useSelector(filters);
  const dispatch = useDispatch();
  const filterNormalize = filtersState.toLowerCase();
  const existingName = items.filter(({ name }) => {
    return name.toLowerCase().includes(filterNormalize.trim());
  });
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBottom="15px"
      w={['350px', '420px', '768px', '1024px', '1200px']}
    >
      <List>
        {existingName.map(({ name, id, number }) => (
          <ContactItem name={name} key={id} number={number} id={id}>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              id={id}
            >
              Delete
            </Button>
          </ContactItem>
        ))}
      </List>
    </Box>
  );
}
export default ContactList;
