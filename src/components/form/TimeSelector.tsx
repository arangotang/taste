import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export enum TimeTypes {
  Prep = 'prep',
  Cook = 'cook',
  Chill = 'chill',
}

interface Props {
  type: TimeTypes | 'servings';
}

const TimeSelector = (props: Props) => {
  const { type } = props;
  const [value, setValue] = useState(0);

  const handleChange = (_: string, newValue: number) => {
    setValue(newValue);
  };

  return (
    <FormControl w="120px">
      <FormLabel as={type === 'servings' ? 'i' : 'label'}>{`${
        type[0].toUpperCase() + type.slice(1)
      }${type === 'servings' ? '' : ' Time'}`}</FormLabel>
      <NumberInput min={0} size="lg" value={value} onChange={handleChange}>
        <NumberInputField id={`${type}-count`} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormHelperText>
        {type === 'servings' ? 'friends' : 'minutes'}
      </FormHelperText>
    </FormControl>
  );
};

export default TimeSelector;
