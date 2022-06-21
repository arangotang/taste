import * as React from 'react';
import { Text, Flex, useDisclosure, Collapse } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import NavLinks from './NavLinks';

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

  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        bg="#E63946"
        color="#F1FAEE"
        justifyContent="space-between"
        alignItems="center"
        padding="0.4rem 1rem"
        position="fixed"
        width="100%"
        zIndex="3"
      >
        <Text as="b" fontSize="3xl">
          Taste.
        </Text>
        <NavLinks />
      </Flex>
    </Collapse>
  );
};

export default Header;
