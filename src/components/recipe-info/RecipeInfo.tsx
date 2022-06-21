import {
  Box,
  Text,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import React from 'react';
import ItalicDescription from '../shared/ItalicDescription';
import SectionTitle from '../shared/SectionTitle';
import Title from '../shared/Title';

const RecipeInfo = () => (
  <Box style={{ position: 'relative' }}>
    <Image
      src="https://images.unsplash.com/photo-1555341748-a9d443dc3c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      style={{
        width: '100vw',
        height: '60vh',
        objectFit: 'cover',
        zIndex: '-1',
        position: 'fixed',
      }}
    />
    <Box
      bg="white"
      style={{ position: 'absolute', top: '60vh', width: '100%' }}
    >
      <Flex
        flexDirection="column"
        p="1rem 3rem 3rem 3rem"
        maxWidth="800px"
        margin="auto"
      >
        <Title>Crunchy Spicy Tuna Roll</Title>
        <ItalicDescription>
          Skip the sushi restaurants and make Crunchy Spicy Tuna Rolls at home!
          This spicy tuna roll recipe is filled with fresh sashimi-grade ahi
          tuna, creamy avocado, a crunchy Panko topping, seasoned sushi rice,
          and a flavorful Sriracha sauce.
        </ItalicDescription>
        <Flex
          alignSelf="center"
          width="100%"
          flexDir="row"
          justifyContent="center"
          marginTop="2rem"
          fontSize="large"
          flexWrap="wrap"
          gap="2rem"
        >
          <Box textAlign="center">
            <Text as="b">Prep</Text>
            <Text>15 mins</Text>
          </Box>
          <Box textAlign="center">
            <Text as="b">Cook</Text>
            <Text>15 mins</Text>
          </Box>
          <Box textAlign="center">
            <Text as="b">Chill</Text>
            <Text>15 mins</Text>
          </Box>
          <Box textAlign="center">
            <Text as="b">Total</Text>
            <Text>45 mins</Text>
          </Box>
        </Flex>
        <Box marginTop="2rem">
          <SectionTitle>What's in it?</SectionTitle>
          <UnorderedList paddingLeft="1rem">
            <ListItem fontSize="xl">
              Raw ahi tuna (Must be labeled “sushi or sashimi grade tuna”)
            </ListItem>
            <ListItem fontSize="xl">Short grain sushi rice</ListItem>
            <ListItem fontSize="xl">
              Dried nori sheets (or you can always use soy sheets if you're not
              into the flavor of seaweed)
            </ListItem>
            <ListItem fontSize="xl">Creamy avocado slices</ListItem>
            <ListItem fontSize="xl">English cucumber</ListItem>
            <ListItem fontSize="xl">Seasoned rice vinegar</ListItem>
            <ListItem fontSize="xl">Mayonnaise</ListItem>
            <ListItem fontSize="xl">Sriracha</ListItem>
            <ListItem fontSize="xl">Soy sauce</ListItem>
            <ListItem fontSize="xl">Panko</ListItem>
            <ListItem fontSize="xl">Sesame seeds</ListItem>
            <ListItem fontSize="xl">
              Optional: wasabi or horseradish sauce
            </ListItem>
          </UnorderedList>
        </Box>
        <Box marginTop="2rem">
          <SectionTitle>How do I make it?</SectionTitle>
          <OrderedList paddingLeft="1rem">
            <ListItem fontSize="xl">
              Transfer the cooked rice to a shallow bowl or plate. Pour the rice
              wine vinegar over the rice and gently fold in to combine. Place
              the rice in the refrigerator to cool for 15 minutes.
            </ListItem>
            <ListItem fontSize="xl">
              If you have a sushi mat, make sure to wrap it in plastic before
              rolling. If you don't have a mat, no problem- just use plastic
              wrap.
            </ListItem>
            <ListItem fontSize="xl">
              Place a sheet of nori rough side up on a cutting board. Wet your
              hands with cold water (it will help prevent the rice from sticking
              to your hands) and spread it to the edges, leaving a 1" border on
              the side furthest from you. Make sure not to compact the rice too
              much or it will become mushy.
            </ListItem>
            <ListItem fontSize="xl">
              For a rice-outside roll, flip the nori over so the rice is facing
              down. For a rice-inside roll, leave the rice facing up.
              Rice-inside rolls are recommended for beginners as they are easier
              to roll and seal.
            </ListItem>
            <ListItem fontSize="xl">
              Place a few pieces of avocado, cucumber, and tuna in a straight
              line on the side closest to you. Then, sprinkle a few pinches of
              panko over the fillings.
            </ListItem>
            <ListItem fontSize="xl">
              Starting at the side closest to you, roll the nori around the
              fillings as tightly as you can.
            </ListItem>
            <ListItem fontSize="xl">
              When you reach the end of the nori without rice, brush it with
              water and roll to seal. Use a very sharp knife to cut 1” pieces of
              sushi. Running the knife under cold water (without drying it) can
              help prevent the rice from sticking to it.
            </ListItem>
            <ListItem fontSize="xl">
              Repeat steps 3-7 with the remaining three rolls. Top with sesame
              seeds and serve with spicy mayo (below) and/or soy sauce.
            </ListItem>
            <ListItem fontSize="xl">Sushi is best served immediately.</ListItem>
            <ListItem fontSize="xl">
              Combine the mayo, water, and sriracha in a small bowl. Thin with
              additional water to your desired consistency, if necessary.
            </ListItem>
            <ListItem fontSize="xl">Serve alongside the sushi rolls.</ListItem>
          </OrderedList>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default RecipeInfo;
