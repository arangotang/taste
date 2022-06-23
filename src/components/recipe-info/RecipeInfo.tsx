import {
  Box,
  Text,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import Header from '../header/Header';
import Description from '../shared/Description';
import SectionTitle from '../shared/SectionTitle';
import Title from '../shared/Title';

const RecipeInfo = () => {
  const [recipeDetails, setRecipeDetails] = useState({
    title: '',
    cuisine: '',
    image: '',
    description: '',
    times: {
      prep: 0,
      cook: 0,
      chill: 0,
      servings: 0,
    },
    ingredients: [''],
    steps: [''],
  });
  let params = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${params.recipeId}`)
      .then(({ data }) => {
        setRecipeDetails(data[0]);
      })
      .catch((e) => console.error(e));
  }, [params.recipeId]);

  return (
    <>
      <Header />
      <Box style={{ position: 'relative' }}>
        <Image
          src={recipeDetails.image}
          style={{
            width: '100vw',
            height: '60vh',
            objectFit: 'cover',
            zIndex: '-1',
            position: 'fixed',
          }}
        />
        <Box
          bg="white"
          style={{ position: 'absolute', top: '60vh', width: '100%' }}
        >
          <Flex
            flexDirection="column"
            p="1rem 3rem 3rem 3rem"
            maxWidth="800px"
            margin="auto"
          >
            <Text as="b" fontSize="2xl" color="red.400">
              {recipeDetails.cuisine}
            </Text>
            <Title>{recipeDetails.title}</Title>
            <Description>{recipeDetails.description}</Description>
            <Flex
              alignSelf="center"
              width="100%"
              flexDir="row"
              justifyContent="center"
              marginTop="2rem"
              fontSize="large"
              flexWrap="wrap"
              gap="2rem"
            >
              {recipeDetails.times.prep > 0 && (
                <Box textAlign="center">
                  <Text as="b">Prep</Text>
                  <Text>{recipeDetails.times.prep} mins</Text>
                </Box>
              )}
              {recipeDetails.times.cook > 0 && (
                <Box textAlign="center">
                  <Text as="b">Cook</Text>
                  <Text>{recipeDetails.times.cook} mins</Text>
                </Box>
              )}
              {recipeDetails.times.chill > 0 && (
                <Box textAlign="center">
                  <Text as="b">Chill</Text>
                  <Text>{recipeDetails.times.chill} mins</Text>
                </Box>
              )}
              <Box textAlign="center">
                <Text as="b">Total</Text>
                <Text>
                  {recipeDetails.times.prep +
                    recipeDetails.times.cook +
                    recipeDetails.times.chill}{' '}
                  mins
                </Text>
              </Box>
              <Box textAlign="center">
                <Text as="b">Servings</Text>
                <Text>{recipeDetails.times.servings}</Text>
              </Box>
            </Flex>
            <Box marginTop="2rem">
              <SectionTitle>What's in it?</SectionTitle>
              <UnorderedList mt="0.5rem" paddingLeft="1rem" spacing="1rem">
                {recipeDetails.ingredients.map((ingredient) => (
                  <ListItem fontSize="xl" key={nanoid()}>
                    {ingredient}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Box marginTop="2rem">
              <SectionTitle>How do I make it?</SectionTitle>
              <OrderedList mt="0.5rem" paddingLeft="1rem" spacing="1rem">
                {recipeDetails.steps.map((step) => (
                  <ListItem fontSize="xl" key={nanoid()}>
                    {step}
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default RecipeInfo;
