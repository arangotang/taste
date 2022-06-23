import * as React from 'react';
import { Text, Flex, useDisclosure, Collapse } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        onOpen();
      } else if (y < window.scrollY) {
        onClose();
      }
      setY(window.scrollY);
    },
    [onClose, onOpen, y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  let navigate = useNavigate();

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        bg="#E63946"
        color="#F1FAEE"
        justifyContent="flex-start"
        alignItems="center"
        padding="0.4rem 1rem"
        position="fixed"
        width="100%"
        zIndex="3"
      >
        <Text
          as="b"
          fontSize="3xl"
          transition="0.3s"
          _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => {
            navigate('/');
          }}
        >
          Taste.
        </Text>
      </Flex>
    </Collapse>
  );
};

export default Header;
