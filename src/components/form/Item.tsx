import { CloseIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { ItemTypes } from './ItemList';

interface Props {
  num: number;
  deleteSelf: () => void;
  changeSelf: (id: string, newText: string) => void;
  value: string;
  id: string;
  type: ItemTypes;
}
const Item = (props: Props) => {
  const { num, deleteSelf, changeSelf, value, id, type } = props;

  const handleChange = (e: { target: { value: string } }) => {
    changeSelf(id, e.target.value);
  };

  return (
    <FormControl variant="floating" display="flex" gap="1rem">
      {type === ItemTypes.Ingredient ? (
        <Input
          placeholder=" "
          value={value}
          onChange={handleChange}
          paddingLeft="1rem"
        />
      ) : (
        <Textarea
          placeholder=" "
          value={value}
          onChange={handleChange}
          paddingLeft="1rem"
        />
      )}
      <FormLabel>{num}</FormLabel>
      <CloseIcon
        float="right"
        onClick={deleteSelf}
        mt="0.7rem"
        transition="0.3s"
        _hover={{ cursor: 'pointer', color: 'red.400' }}
      >
        Delete
      </CloseIcon>
      {/* <Button float="right" onClick={deleteSelf} colorScheme="red">
        Delete
      </Button> */}
    </FormControl>
  );
};

export default Item;
