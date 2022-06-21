import React, { useMemo, useState } from 'react';
import {
  Input,
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Box,
  Wrap,
  Divider,
  Button,
} from '@chakra-ui/react';
import Title from '../shared/Title';
import ItalicDescription from '../shared/ItalicDescription';
import ItemList, { ItemTypes } from './ItemList';
import ImageSelector from './ImageSelector';
import TimeSelector, { TimeTypes } from './TimeSelector';
import { nanoid } from 'nanoid';
import FormStatus from './FormStatus';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([{ value: '', id: nanoid() }]);
  const [steps, setSteps] = useState([{ value: '', id: nanoid() }]);
  const [selectedUrl, setSelectedUrl] = useState<string>('');

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const newVal = e.target.value;
    const inputName = e.target.name;

    switch (inputName) {
      case 'title':
        setTitle(newVal);
        break;
      case 'cuisine':
        setCuisine(newVal);
        break;
      case 'description':
        setDescription(newVal);
        break;
    }
  };

  const canSubmit = useMemo(() => {
    if (
      title.length > 1 &&
      cuisine.length > 1 &&
      description.length > 1 &&
      ingredients.length > 1 &&
      steps.length > 1 &&
      selectedUrl.length > 1
    ) {
      return true;
    } else {
      return false;
    }
  }, [
    cuisine.length,
    description.length,
    ingredients.length,
    selectedUrl.length,
    steps.length,
    title.length,
  ]);

  return (
    <Box style={{ position: 'relative' }}>
      <Image
        src="https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        style={{ zIndex: '-1' }}
        w="100vw"
        h="60vh"
        objectFit="cover"
        pos="fixed"
      />
      <Box bg="white" pos="absolute" top="60vh" w="100%">
        <Flex p="1rem 3rem 3rem 3rem" maxW="800px" m="auto" flexDir="column">
          <Title>Create.</Title>
          <ItalicDescription>
            Contribute your own home recipes to the community.
          </ItalicDescription>

          <Wrap justify="space-between" pt="1rem" mb="1rem">
            <FormControl variant="floating" w="500px">
              <Input
                placeholder=" "
                size="lg"
                value={title}
                onChange={handleChange}
                name="title"
              />
              <FormLabel>Recipe Name</FormLabel>
            </FormControl>

            <FormControl variant="floating" w="160px">
              <Input
                placeholder=" "
                size="lg"
                value={cuisine}
                onChange={handleChange}
                name="cuisine"
              />
              <FormLabel>Cuisine</FormLabel>
            </FormControl>
          </Wrap>

          <FormControl variant="floating" mb="2rem">
            <Textarea
              placeholder=" "
              value={description}
              onChange={handleChange}
              name="description"
            />
            <FormLabel>Description</FormLabel>
          </FormControl>

          <Wrap justify="space-between" mb="2rem">
            <TimeSelector type={TimeTypes.Prep} />
            <TimeSelector type={TimeTypes.Cook} />
            <TimeSelector type={TimeTypes.Chill} />
            <TimeSelector type="servings" />
          </Wrap>

          <ItemList
            type={ItemTypes.Ingredient}
            items={ingredients}
            setItems={setIngredients}
          />
          <ItemList type={ItemTypes.Steps} items={steps} setItems={setSteps} />

          <ImageSelector
            selectedUrl={selectedUrl}
            setSelectedUrl={setSelectedUrl}
          />
          <Divider m="1rem 0" />
          <Flex flexDir="column" alignItems="center">
            <FormStatus
              titleLength={title.length}
              cuisineLength={cuisine.length}
              descriptionLength={description.length}
              ingredientsLength={ingredients.length}
              stepsLength={steps.length}
              selectedUrlLength={selectedUrl.length}
            />
            <Flex mt="1rem" gap="1rem" justify="center">
              <Button colorScheme="red" variant="outline">
                Cancel
              </Button>
              <Button colorScheme="teal" isDisabled={!canSubmit}>
                Submit
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecipeForm;
