import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Recipe } from './components/RecipeInfo';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Recipe />
  </ChakraProvider>
);
