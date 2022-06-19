import { Box, Container, Text, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import ItalicDescription from './shared/ItalicDescription';
import Title from './shared/Title';

export const Recipe = () => (
  <Box>
    <Image
      src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2976&q=80"
      style={{
        width: '100vw',
        height: '60vh',
        objectFit: 'cover',
      }}
    />
    <Flex flexDirection="column" p="1rem">
      <Title>Crunchy Spicy Tuna Roll</Title>
      <ItalicDescription>
        Skip the sushi restaurants and make Crunchy Spicy Tuna Rolls at home!
        This spicy tuna roll recipe is filled with fresh sashimi-grade ahi tuna,
        creamy avocado, a crunchy Panko topping, seasoned sushi rice, and a
        flavorful Sriracha sauce.
      </ItalicDescription>
      {/* <Container>
        <Text>Ingredients</Text>
        <Text>Apple</Text>
      </Container> */}
    </Flex>
  </Box>
);
