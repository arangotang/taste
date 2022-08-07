import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { createApi } from 'unsplash-js';
import { accessKey } from './config';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import RecipeForm from './components/form/RecipeForm';
import RecipeInfo from './components/recipe-info/RecipeInfo';

export const api = createApi({ accessKey });

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<RecipeForm />} />
      <Route path="/recipes/:recipeId" element={<RecipeInfo />} />
    </Routes>
  </ChakraProvider>
);
