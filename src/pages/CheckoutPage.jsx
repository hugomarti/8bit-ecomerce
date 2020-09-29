import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";

import CheckoutHeaderTable from "../components/CheckoutHeaderTable";
import CheckoutItem from "../components/CheckoutItem";

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <Box>
      <Heading textAlign="center" m="2rem" color="white">
        Checkout
      </Heading>
      <Flex height="90vh" w="90%" m="auto" flexDir="column" alignItems="center">
        <Flex
          h="80%"
          w="100%"
          p="2rem"
          bg="gray.700"
          rounded="md"
          flexDir="column"
        >
          <CheckoutHeaderTable />
          {items.length === 0 ? (
            <Flex
              fontSize="xl"
              h="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white">Your cart is empty.</Text>
            </Flex>
          ) : (
            <Flex overflow="scroll" flexDir="column">
              {items.map((item) => (
                <CheckoutItem item={item} />
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutPage;
