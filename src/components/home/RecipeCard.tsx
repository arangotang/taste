import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  recipeName: string;
  url: string;
  id: string;
}

const RecipeCard = (props: Props) => {
  const { recipeName, url, id } = props;
  let navigate = useNavigate();

  return (
    <Box
      w="300px"
      h="300px"
      borderRadius="8px"
      _hover={{ cursor: 'pointer' }}
      pos="relative"
      onClick={() => navigate(`/recipes/${id}`)}
    >
      <Image src={url} w="100%" h="100%" objectFit="cover" borderRadius="8px" />
      <Flex
        fontWeight="600"
        borderRadius="0px 0px 8px 8px"
        pos="absolute"
        bottom="0"
        w="100%"
        h="60px"
        bg="rgba(230, 57, 70, 1)"
        placeContent="center"
      >
        <Text
          m="auto"
          color="white"
          fontSize={recipeName.length > 28 ? 'md' : 'lg'}
          lineHeight="5"
        >
          {recipeName}
        </Text>
      </Flex>
    </Box>
  );
};

export default RecipeCard;
