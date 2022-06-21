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
import React, { Dispatch, SetStateAction } from 'react';

export enum TimeTypes {
  Prep = 'prep',
  Cook = 'cook',
  Chill = 'chill',
}

interface Props {
  type: TimeTypes | 'servings';
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const TimeSelector = (props: Props) => {
  const { type, value, setValue } = props;

  const handleChange = (valAsString: string, valAsNum: number) => {
    if (valAsString) {
      let newVal = Number(valAsString);
      if (isNaN(newVal)) newVal = 0;
      setValue(newVal);
    } else {
      if (isNaN(valAsNum)) valAsNum = 0;
      setValue(valAsNum);
    }
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
