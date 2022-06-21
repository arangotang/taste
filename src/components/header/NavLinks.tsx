import * as React from 'react';
import { Stack, Link } from '@chakra-ui/react';

const NavLinks = () => (
  <Stack direction="row">
    <Link>Home</Link>
    <Link>My Recipes</Link>
  </Stack>
);

export default NavLinks;
