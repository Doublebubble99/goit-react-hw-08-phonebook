import { useDispatch } from 'react-redux';
import { Box, Text, Button } from '@chakra-ui/react';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <Box display="flex" alignItems="center">
        <Text
          fontSize={['16px', '18px', '20px', '22px', '24px']}
          color="orangered"
          marginRight="25px"
          padding="5px"
        >
          {user.name}
        </Text>
        <Button
          fontSize={['16px', '18px', '20px', '22px', '24px']}
          height={['25px', '30px', '35px', '40px', '45px']}
          width={['60px', '70px', '80px', '90px', '100px']}
          border="1px"
          borderColor="green.500"
          onClick={() => dispatch(logOut())}
          type="button"
        >
          Logout
        </Button>
      </Box>
    </div>
  );
}
