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
      justifyContent="center"
      alignItems="center"
      px="0.5rem"
      textAlign="center"
    >
      <Box flex="1 1 5rem">
        <Text fontSize={{ lg: "xl", sm: "sm" }}>Product</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize={{ lg: "xl", sm: "sm" }}>Title</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize={{ lg: "xl", sm: "sm" }}>Quantity</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize={{ lg: "xl", sm: "sm" }}>Price</Text>
      </Box>
      <Box flex="1 1 5rem">
        <Text fontSize={{ lg: "xl", sm: "sm" }}>Remove</Text>
      </Box>
    </Flex>
  </Flex>
);

export default CheckoutHeaderTable;
