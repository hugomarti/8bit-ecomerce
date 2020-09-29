import React from "react";
import { Box, Image, Flex, Text, Icon } from "@chakra-ui/core";
import { useDispatch } from "react-redux";

import { removeItem } from "../redux/cart/cart.actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      p="0.5rem"
      my="1rem"
      bg="gray.50"
      rounded="md"
      justify="space-between"
      align="center"
    >
      <Box bg="gray.800" p="1rem" rounded="md">
        <Image size="2rem" rounded="md" src={item.image} />
      </Box>
      <Flex
        p="0.5rem"
        justifyContent="space-between"
        align="center"
        w="100%"
        flexDir="column"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text mr="0.5rem">X {item.quantity}</Text>
          <Text ml={2} fontSize="lg" lineHeight="short">
            {item.title}
          </Text>
        </Flex>
        <Text fontWeight="bold" mt={2}>
          ${item.price}
        </Text>
      </Flex>
      <Icon
        cursor="pointer"
        m="0.5rem"
        name="close"
        onClick={() => dispatch(removeItem(item))}
      />
    </Flex>
  );
};

export default CartItem;
