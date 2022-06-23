import React, { FC, PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

const Description: FC<PropsWithChildren> = ({ children }) => (
  <Text fontSize="xl">{children}</Text>
);

export default Description;
