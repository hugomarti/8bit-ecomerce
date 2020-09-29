import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";

const CheckoutHeaderTable = () => (
  <Flex justifyContent="center" alignItems="center" w="100%">
    <Flex
      color="white"
      height="4vh"
      w="100%"
      m="0 auto"
      mb="1rem"
      justifyContent="space-between"
      alignItems="center"
      px="0.5rem"
      textAlign="center"
    >
      <Box flex="1 1 5rem">
        <Text fontSize="xl">Product</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize="xl">Title</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize="xl">Quantity</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize="xl">Price</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize="xl">Remove</Text>
      </Box>
    </Flex>
  </Flex>
);

export default CheckoutHeaderTable;
