import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
export default function Layout() {
  return (
    <Box marginLeft="auto" marginRight="auto">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
