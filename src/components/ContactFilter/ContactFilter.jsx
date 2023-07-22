import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, InputGroup, InputLeftAddon, Box } from '@chakra-ui/react';
import { Label } from './ContactFilter.styled';
import { filters } from 'redux/contacts/selectors';
import { setFilters } from 'redux/contacts/filtersSlice';
function ContactFilter() {
  const filtersState = useSelector(filters);
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingBottom="15px"
      w={['350px', '420px', '768px', '1024px', '1200px']}
    >
      <Label htmlFor="Filter">Find contacts by name</Label>
      <InputGroup width={[300, 400, 700, 900, 1000]}>
        <InputLeftAddon
          children="Name"
          height={['20px', '25px', '40px', '55px', '65px']}
        />
        <Input
          color="rosybrown"
          placeholder="Find name"
          height={['20px', '25px', '40px', '55px', '65px']}
          id="Filter"
          onChange={({ target }) => dispatch(setFilters(target.value))}
          value={filtersState}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </InputGroup>
    </Box>
  );
}
export default ContactFilter;
