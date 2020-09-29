import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { useSelector } from "react-redux";

import CheckoutHeaderTable from "../components/CheckoutHeaderTable";
import CheckoutItem from "../components/CheckoutItem";

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <Flex
      height="90vh"
      m="1rem"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        h="80%"
        w="90%"
        p="2rem"
        bg="gray.700"
        rounded="md"
        flexDir="column"
      >
        <CheckoutHeaderTable />
        {items.length === 0 ? (
          <Flex
            fontSize="3xl"
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
  );
};

export default CheckoutPage;
