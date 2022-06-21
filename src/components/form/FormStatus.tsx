import { Box } from '@chakra-ui/react';
import React from 'react';
import StatusMsg from './StatusMsg';

interface Props {
  titleLength: number;
  cuisineLength: number;
  descriptionLength: number;
  ingredientsLength: number;
  stepsLength: number;
  selectedUrlLength: number;
}
const FormStatus = (props: Props) => {
  const {
    titleLength,
    cuisineLength,
    descriptionLength,
    ingredientsLength,
    stepsLength,
    selectedUrlLength,
  } = props;
  return (
    <Box m="auto">
      <StatusMsg
        field="Recipe name"
        minLength={1}
        isPassing={titleLength > 1}
      />
      <StatusMsg field="Cuisine" minLength={1} isPassing={cuisineLength > 1} />
      <StatusMsg
        field="Description"
        minLength={1}
        isPassing={descriptionLength > 1}
      />
      <StatusMsg
        field="Ingredients list"
        minLength={1}
        isPassing={ingredientsLength > 1}
      />
      <StatusMsg field="Steps list" minLength={1} isPassing={stepsLength > 1} />
      <StatusMsg
        field="Image"
        minLength={1}
        isPassing={selectedUrlLength > 1}
      />
    </Box>
  );
};

export default FormStatus;
