import { NavLink } from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <NavLink to="/">
            <Tab
              fontSize={['16px', '18px', '20px', '22px', '24px']}
              padding="5px"
            >
              Main page
            </Tab>
          </NavLink>

          {isLoggedIn && (
            <NavLink to="/contacts">
              <Tab
                fontSize={['16px', '18px', '20px', '22px', '24px']}
                padding="5px"
              >
                Contacts
              </Tab>
            </NavLink>
          )}
        </TabList>
      </Tabs>
    </nav>
  );
}
