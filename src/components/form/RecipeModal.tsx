import {
  ModalOverlay,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  id: string;
}
const RecipeModal = (props: Props) => {
  const { isOpen, onClose, title, id } = props;

  const BlurryOverlay = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  let navigate = useNavigate();

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <BlurryOverlay />
        <ModalContent>
          <ModalHeader>Created.</ModalHeader>
          <ModalBody>
            <Text mb="2rem">{title} has never sounded better 😋</Text>
            <Text>Let's go check out your recipe.</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                navigate('/');
              }}
            >
              Go Home
            </Button>
            <Button
              colorScheme="red"
              ml="1rem"
              onClick={() => {
                navigate(`/recipes/${id}`);
              }}
            >
              Take me there
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RecipeModal;
