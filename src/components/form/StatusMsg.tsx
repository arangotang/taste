import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

interface Props {
  field: string;
  minLength: number;
  isPassing: boolean;
}
const StatusMsg = (props: Props) => {
  const { field, minLength, isPassing } = props;

  let msgText = `${field} needs to be at least ${minLength} character${
    minLength > 1 ? 's' : ''
  } long`;

  if (field === 'Image') {
    msgText = 'Search and select an image';
  } else if (field.includes('list')) {
    msgText = `${field} needs more than one item`;
  }

  return (
    <Flex alignItems="center" gap="0.8em">
      {isPassing ? (
        <CheckCircleIcon color="teal.500" />
      ) : (
        <WarningIcon color="red.400" />
      )}
      <Text color={isPassing ? 'teal.500' : 'red.400'}>{msgText}</Text>
    </Flex>
  );
};

export default StatusMsg;
