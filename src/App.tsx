import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/header/Header';
import RecipeInfo from './components/recipe-info/RecipeInfo';
import RecipeForm from './components/form/RecipeForm';
import { theme } from './theme';
import { createApi } from 'unsplash-js';
import { accessKey } from './config';
import HomePage from './components/home/HomePage';

export const api = createApi({ accessKey });

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    {/* <RecipeInfo /> */}
    {/* <RecipeForm /> */}
    <HomePage />
  </ChakraProvider>
);
