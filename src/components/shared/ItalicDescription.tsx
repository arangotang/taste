import React, { FC, PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

const ItalicDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text as="i" fontSize="xl">
      {children}
    </Text>
  );
};

export default ItalicDescription;
