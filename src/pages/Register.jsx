import { useDispatch } from 'react-redux';
import {
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Box,
} from '@chakra-ui/react';
import { register } from 'redux/auth/operations';
export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        w={['350px', '420px', '768px', '1024px', '1200px']}
        marginLeft="auto"
        marginRight="auto"
        paddingTop="25px"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        bgImage="url(https://cdn.pixabay.com/photo/2017/12/18/13/59/create-3026190_1280.jpg)"
        height="100vh"
        backgroundRepeat="no-repeat"
      >
        <Stack spacing={4}>
          <InputGroup width={[200, 400, 700, 900, 1000]}>
            <InputLeftAddon
              children="Name"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
            <Input
              type="text"
              placeholder="Your name"
              name="name"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
          </InputGroup>
          <InputGroup width={[200, 400, 700, 900, 1000]}>
            <InputLeftAddon
              children="Email"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
            <Input
              type="email"
              placeholder="Your email"
              name="email"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
            <InputRightAddon
              children="@mail.com"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
          </InputGroup>
          <InputGroup width={[200, 400, 700, 900, 1000]}>
            <InputLeftAddon
              children="Password"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
            <Input
              type="password"
              placeholder="Your password"
              name="password"
              height={['20px', '25px', '40px', '55px', '65px']}
            />
          </InputGroup>
        </Stack>
        <Button
          marginTop={['10px', '15px', '20px', '25px', '30px']}
          type="submit"
          colorScheme="cyan"
          width={[100, 125, 150, 200]}
          height={[25, 35, 50]}
        >
          Register
        </Button>
      </Box>
    </form>
  );
}
