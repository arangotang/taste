import React, { Dispatch, SetStateAction, useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { api } from '../../App';
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface Photo {
  id: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    [key: string]: string;
    thumb: string;
  };
  [key: string]: any;
}

interface Props {
  selectedUrl: string;
  setSelectedUrl: Dispatch<SetStateAction<string>>;
}

const ImageSelector = (props: Props) => {
  const { selectedUrl, setSelectedUrl } = props;
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const photoElements = photos.map((photo) => (
    <Image
      key={photo.id}
      src={photo.urls.regular}
      w="200px"
      h="120px"
      objectFit="cover"
      borderRadius="8px"
      opacity={
        photo.urls.full === selectedUrl ||
        !photos.reduce((curBool, curPhoto) => {
          // store this in a useMemo outside of this
          if (selectedUrl === curPhoto.urls.full) {
            return true;
          }
          return curBool || false;
        }, false)
          ? '1'
          : '0.5'
      }
      transition="0.3s"
      _hover={{ cursor: 'pointer' }}
      onClick={() => {
        setSelectedUrl(photo.urls.full);
      }}
    />
  ));

  const handleChange = (e: { target: { value: string } }) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    api.search
      .getPhotos({ query: searchText, perPage: 9 })
      .then((result) => {
        if (
          result.response !== undefined &&
          Array.isArray(result.response.results)
        ) {
          setPhotos(result.response.results);
        } else {
          console.log('something went wrong!');
        }
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  };

  return (
    <>
      <SectionTitle>Image.</SectionTitle>
      <Flex mt="1rem" gap="1rem">
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input value={searchText} onChange={handleChange} />
          </InputGroup>
          {photos.length > 0 && (
            <FormHelperText>{`Showing results for "${searchText}"`}</FormHelperText>
          )}
        </FormControl>
        <Button onClick={handleSearch}>Search</Button>
      </Flex>
      {photos.length > 0 && (
        <Flex m="1rem auto 0 auto" justify="center" gap="1rem" flexWrap="wrap">
          {photoElements}
        </Flex>
      )}
    </>
  );
};

export default ImageSelector;
