import React from 'react';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  Button,
  Box,
  useToast,
} from '@chakra-ui/react';
import { contacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Title, Form } from './ContactForm.styled';
function ContactForm() {
  const toast = useToast();
  const { items } = useSelector(contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const onInput = evt => {
    const target = evt.target;
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };
  const onSubmit = evt => {
    evt.preventDefault();
    const existingName = items.find(contact => contact.name === name);
    if (existingName) {
      toast({
        title: `You already have ${name} in contacts!`,
        status: 'warning',
        isClosable: true,
      });
      return;
    }
    const id = nanoid();
    dispatch(addContact({ number, name, id }));
    setName('');
    setNumber('');
  };
  return (
    <Box
      paddingTop="20px"
      paddingBottom="20px"
      w={['350px', '420px', '768px', '1024px', '1200px']}
    >
      <Title>Phonebook</Title>
      <Form autoComplete="off" onSubmit={onSubmit}>
        <Stack spacing={4}>
          <InputGroup width={[300, 400, 700, 900, 1000]}>
            <InputLeftAddon
              children="Name"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
            <Input
              value={name}
              id="Name"
              type="text"
              color="chartreuse"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onInput}
              placeholder="Please enter the name"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
          </InputGroup>
          <InputGroup width={[300, 400, 700, 900, 1000]}>
            <InputLeftAddon
              children="Number"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
            <Input
              color="cadetblue"
              value={number}
              id="Number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onInput}
              placeholder="Please enter a number"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
          </InputGroup>
        </Stack>
        <Button
          type="submit"
          marginTop={['10px', '15px', '20px', '25px', '30px']}
          colorScheme="whatsapp"
          width={[75, 100, 125, 150, 200]}
          height={['20px', '30px', '35px', '40px', '50px']}
          fontSize={['12px', '14px', '16px', '18px', '20px']}
        >
          Add contact
        </Button>
      </Form>
    </Box>
  );
}
export default ContactForm;
