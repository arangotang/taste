import { Box, Image, Flex, Center, Button } from '@chakra-ui/react';
import React from 'react';
import ItalicDescription from '../shared/ItalicDescription';
import Title from '../shared/Title';
import RecipeGallery from './RecipeGallery';

const HomePage = () => (
  <Box pos="relative">
    <Image
      src="https://images.unsplash.com/photo-1515968270336-3e94abcdac1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      w="100vw"
      h="60vh"
      objectFit="cover"
      style={{ zIndex: '-1' }}
      pos="fixed"
    />
    <Box bg="white" pos="absolute" top="60vh" w="100%">
      <Flex p="1rem 3rem 3rem 3rem" flexDir="column">
        <Center>
          <Title>Taste.</Title>
        </Center>
        <Center>
          <ItalicDescription>Whet your appetite.</ItalicDescription>
        </Center>
        <RecipeGallery />
        <Center>
          <Title>Create.</Title>
        </Center>
        <Center>
          <ItalicDescription>Sharing is caring.</ItalicDescription>
        </Center>
        <Button
          colorScheme="red"
          size="lg"
          mt="0.5rem"
          w="200px"
          alignSelf="center"
        >
          Create a Recipe
        </Button>
      </Flex>
    </Box>
  </Box>
);

export default HomePage;
