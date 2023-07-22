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
import { logIn } from 'redux/auth/operations';
export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        display="flex"
        alignItems="center"
        flexDirection="column"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        height="100vh"
        paddingTop="25px"
        backgroundImage="url(https://cdn.pixabay.com/photo/2013/03/16/01/30/cave-94193_1280.jpg)"
      >
        <Stack spacing={4}>
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
          type="submit"
          width={[100, 125, 150, 200]}
          height={[25, 35, 50]}
          colorScheme="blackAlpha"
          marginTop={['10px', '15px', '20px', '25px', '30px']}
        >
          Log In
        </Button>
      </Box>
    </form>
  );
}
