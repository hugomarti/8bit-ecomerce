import React from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/core";
import { IoIosCart } from "react-icons/io";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/cart/cart.actions";
import ModalItemDescription from "./ModalItemDescription";

const Product = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  return (
    <Flex
      p="1rem"
      m="2rem"
      bg="gray.50"
      rounded="md"
      flexDir="column"
      justify="center"
      align="center"
    >
      <Box
        cursor="pointer"
        bg="gray.800"
        p="1rem"
        rounded="md"
        onClick={onOpen}
      >
        <Image size="10rem" rounded="md" src={item.image} />
      </Box>
      <Flex p="0.5rem" justifyContent="space-between" align="center" w="100%">
        <Text my={2} fontSize="xl" lineHeight="short">
          {item.title}
        </Text>
        <Text fontWeight="bold" my={2}>
          ${item.price}
        </Text>
      </Flex>
      <ButtonGroup>
        <Button
          size="lg"
          leftIcon={IoIosCart}
          variantColor="pink"
          variant="solid"
          onClick={() => {
            dispatch(addItem(item));
          }}
        >
          Add To Cart
        </Button>
      </ButtonGroup>
      <ModalItemDescription item={item} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Product;
