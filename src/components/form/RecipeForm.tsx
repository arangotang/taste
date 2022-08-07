import React, { useMemo, useState } from 'react';
import axios from 'axios';
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
  useDisclosure,
} from '@chakra-ui/react';
import Title from '../shared/Title';
import ItemList, { ItemTypes } from './ItemList';
import ImageSelector from './ImageSelector';
import TimeSelector, { TimeTypes } from './TimeSelector';
import { nanoid } from 'nanoid';
import FormStatus from './FormStatus';
import { API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Description from '../shared/Description';
import RecipeModal from './RecipeModal';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([{ value: '', id: nanoid() }]);
  const [steps, setSteps] = useState([{ value: '', id: nanoid() }]);
  const [selectedUrl, setSelectedUrl] = useState<string>('');
  const [prepTime, setPrepTime] = useState<number>(0);
  const [cookTime, setCookTime] = useState<number>(0);
  const [chillTime, setChillTime] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);
  const [id] = useState(nanoid());

  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleSubmit = () => {
    if (canSubmit) {
      const recipeData = {
        id,
        title,
        cuisine,
        description,
        ingredients: ingredients.map((ingredient) => ingredient.value),
        steps: steps.map((step) => step.value),
        image: selectedUrl,
        times: {
          prep: prepTime,
          cook: cookTime,
          chill: chillTime,
          servings,
        },
      };
      axios.post(API_URL, recipeData);
      onOpen();
    }
  };

  let navigate = useNavigate();

  return (
    <>
      <RecipeModal isOpen={isOpen} onClose={onClose} title={title} id={id} />
      <Header />
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
            <Description>
              Contribute your own home recipes to the community.
            </Description>

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

            <Wrap justify="space-between" mb="4rem">
              <TimeSelector
                type={TimeTypes.Prep}
                value={prepTime}
                setValue={setPrepTime}
              />
              <TimeSelector
                type={TimeTypes.Cook}
                value={cookTime}
                setValue={setCookTime}
              />
              <TimeSelector
                type={TimeTypes.Chill}
                value={chillTime}
                setValue={setChillTime}
              />
              <TimeSelector
                type="servings"
                value={servings}
                setValue={setServings}
              />
            </Wrap>

            <ItemList
              type={ItemTypes.Ingredient}
              items={ingredients}
              setItems={setIngredients}
            />
            <ItemList
              type={ItemTypes.Steps}
              items={steps}
              setItems={setSteps}
            />

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
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="teal"
                  isDisabled={!canSubmit}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default RecipeForm;
