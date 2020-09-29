import React from "react";
import { Box, Image, Flex, Text, Button, ButtonGroup } from "@chakra-ui/core";
import { IoIosCart } from "react-icons/io";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/cart/cart.actions";

const Product = ({ item }) => {
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
      // flex="1 1 15rem"
    >
      <Box bg="gray.800" p="1rem" rounded="md">
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
      <ButtonGroup mb="1rem">
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
    </Flex>
  );
};

export default Product;
