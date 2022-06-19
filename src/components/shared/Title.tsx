import React, { FC, PropsWithChildren } from 'react';
import { Text } from '@chakra-ui/react';

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text as="b" fontSize="6xl">
      {children}
    </Text>
  );
};

export default Title;
