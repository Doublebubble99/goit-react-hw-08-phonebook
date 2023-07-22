import { NavLink } from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export default function AuthNav() {
  return (
    <Box>
      <nav>
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList display="flex" alignItems="center">
            <NavLink to="/register">
              <Tab
                display="flex"
                fontSize={['16px', '18px', '20px', '22px', '24px']}
                marginRight="25px"
                padding="5px"
              >
                Register
              </Tab>
            </NavLink>

            <NavLink to="/login">
              <Tab
                fontSize={['16px', '18px', '20px', '22px', '24px']}
                padding="5px"
              >
                Log In
              </Tab>
            </NavLink>
          </TabList>
        </Tabs>
      </nav>
    </Box>
  );
}
