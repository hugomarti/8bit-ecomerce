import React from "react";
import { Box, Flex, Heading, Badge } from "@chakra-ui/core";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Navbar = ({ openCart }) => {
  const itemsCount = useSelector((state) => state.cart.cartItems);
  const history = useHistory();

  const handleItemsCount = () => {
    const total = itemsCount.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    );
    return total;
  };
  return (
    <Flex justifyContent="center" minH="5vh" bg="gray.50">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="90%"
        m="0 auto"
      >
        <Heading
          my="1rem"
          className="logo"
          cursor="pointer"
          onClick={() => history.push("/")}
        >
          8Bit
        </Heading>
        <Flex
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          onClick={openCart}
        >
          <Box
            mr="0.2rem"
            cursor="pointer"
            size="32px"
            as={AiOutlineShopping}
          />
          <Badge>{handleItemsCount()}</Badge>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
