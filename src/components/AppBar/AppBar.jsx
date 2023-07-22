import { Box } from '@chakra-ui/react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Box
        marginLeft="auto"
        marginRight="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height={['60px']}
        w={['350px', '420px', '768px', '1024px', '1200px']}
        bgGradient="linear(to-t, blue.200, red.500)"
      >
        <Box justifyContent="flex-start" display="flex">
          <Navigation />
        </Box>
        <Box
          width="25%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Box>
    </header>
  );
}
