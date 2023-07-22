import { useNavigate } from 'react-router-dom';
import { Box, Text, Button } from '@chakra-ui/react';
export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      position="fixed"
      fontSize={['sm', 'md', 'lg', 'xl']}
      bgImage="url(https:////cdn.pixabay.com/photo/2023/01/19/12/17/phone-booth-7728961_1280.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      w={['350px', '420px', '768px', '1024px', '1200px']}
      display="flex"
      flexDirection="column"
      height="100vh"
      marginLeft="auto"
      marginRight="auto"
      justifyContent="center"
    >
      <Text
        textAlign="center"
        color="aqua"
        paddingBottom="20px"
        paddingTop="20px"
      >
        Welcome to the main contacts page
      </Text>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text paddingBottom="10px" color="chocolate">
          Manage your contacts
        </Text>
        <Button type="button" onClick={() => navigate('/login')}>
          Log in
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text paddingBottom="10px" color="chocolate">
          Create own phonebook
        </Text>
        <Button type="button" onClick={() => navigate('/register')}>
          Sign in
        </Button>
      </Box>
    </Box>
  );
}
