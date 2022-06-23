import { Box, Image, Flex, Center, Button } from '@chakra-ui/react';
import React from 'react';
import Description from '../shared/Description';
import Title from '../shared/Title';
import RecipeGallery from './RecipeGallery';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <>
      <Header />
      <Box pos="relative">
        <Image
          src="https://images.unsplash.com/photo-1604808835074-3e60cc6a9ac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80"
          w="100vw"
          h="60vh"
          objectFit="cover"
          style={{ zIndex: '-1' }}
          pos="fixed"
        />
        <Box bg="white" pos="absolute" top="60vh" w="100%">
          <Flex p="3rem 3rem 3rem 3rem" flexDir="column">
            <Center>
              <Title>Taste.</Title>
            </Center>
            <Center mt="-0.5rem">
              <Description>Whet your appetite.</Description>
            </Center>
            <RecipeGallery />
            <Box
              bg="gray.100"
              marginLeft="-3rem"
              marginRight="-3rem"
              marginBottom="-3rem"
              paddingTop="2rem"
              paddingBottom="5rem"
            >
              <Center>
                <Title>Create.</Title>
              </Center>
              <Center mt="-0.5rem">
                <Description>Sharing is caring.</Description>
              </Center>
              <Center>
                <Button
                  colorScheme="red"
                  size="lg"
                  mt="2rem"
                  w="200px"
                  alignSelf="center"
                  onClick={() => {
                    navigate('/create');
                  }}
                >
                  Create a Recipe
                </Button>
              </Center>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
