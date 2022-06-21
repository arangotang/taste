import { Button, Flex } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import SecondaryTitle from '../shared/SecondaryTitle';
import Item from './Item';
import { nanoid } from 'nanoid';

export enum ItemTypes {
  Ingredient = 'ingredient',
  Steps = 'steps',
}

interface Props {
  type: ItemTypes;
  items: {
    value: string;
    id: any;
  }[];
  setItems: Dispatch<
    SetStateAction<
      {
        value: string;
        id: any;
      }[]
    >
  >;
}

const ItemList = (props: Props) => {
  const { type, items, setItems } = props;

  const deleteItem = (id: string) => {
    setItems((prevItems) => [...prevItems.filter((item) => id !== item.id)]);
  };

  const handleItemChange = (id: string, newText: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, value: newText };
        }
        return item;
      })
    );
  };

  const itemElements = items.map((item, i) => (
    <Item
      num={i + 1}
      key={item.id}
      id={item.id}
      deleteSelf={() => deleteItem(item.id)}
      changeSelf={handleItemChange}
      value={item.value}
      type={type}
    />
  ));

  const handleOneMore = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: nanoid(),
        value: '',
      },
    ]);
  };

  let titleText;

  switch (type) {
    case ItemTypes.Ingredient:
      titleText = 'Ingredient';
      break;
    case ItemTypes.Steps:
      titleText = 'Step';
      break;
  }

  return (
    <>
      <SecondaryTitle>{`${titleText}${
        items.length > 1 ? 's' : ''
      }.`}</SecondaryTitle>
      <Flex flexDir="column" gap="1rem" mt="1rem">
        {itemElements}
        <Button
          w="fit-content"
          // alignSelf="center"
          onClick={handleOneMore}
          // colorScheme="whatsapp"
          mb="1rem"
        >
          {`Add ${type === ItemTypes.Ingredient ? 'ingredients' : 'steps'}`}
        </Button>
      </Flex>
    </>
  );
};

export default ItemList;
