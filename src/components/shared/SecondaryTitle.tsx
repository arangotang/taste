import React, { FC, PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

const SecondaryTitle: FC<PropsWithChildren> = ({ children }) => (
  <Text as="b" fontSize="3xl">
    {children}
  </Text>
);

export default SecondaryTitle;
