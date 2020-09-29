import React from "react";
import { Box, Flex, Image, Text, Icon } from "@chakra-ui/core";
import { useDispatch } from "react-redux";

import { removeItem } from "../redux/cart/cart.actions";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Flex
      p="0.5rem"
      my="0.3rem"
      bg="gray.50"
      rounded="md"
      justify="space-between"
      align="center"
      w="100%"
      px="0.5rem"
      textAlign="center"
    >
      <Flex justifyContent="center" alignItems="center" flex="1 1 5rem">
        <Flex
          justifyContent="center"
          alignItems="center"
          bg="gray.800"
          p="1rem"
          rounded="md"
          w="5rem"
        >
          <Image size="2rem" rounded="md" src={item.image} />
        </Flex>
      </Flex>
      <Box flex="1 1 5rem">
        <Text ml={2} fontSize="lg" lineHeight="short">
          {item.title}
        </Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text mr="0.5rem">X {item.quantity}</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontWeight="bold" mt={2}>
          ${item.price}
        </Text>
      </Box>
      <Box flex="1 1 5rem">
        <Icon
          cursor="pointer"
          m="0.5rem"
          name="close"
          onClick={() => dispatch(removeItem(item))}
        />
      </Box>
    </Flex>
  );
};

export default CheckoutItem;
