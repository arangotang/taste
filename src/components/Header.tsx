import * as React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { NavLinks } from './NavLinks';

export const Header = () => (
  <Flex
    bg="#E63946"
    color="#F1FAEE"
    justifyContent="space-between"
    alignItems="center"
    padding="0.4rem 1rem"
  >
    <Text as="b" fontSize="3xl">
      Taste.
    </Text>
    <NavLinks />
  </Flex>
);
