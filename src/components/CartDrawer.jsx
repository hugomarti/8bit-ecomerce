import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
  const itemsToAdd = useSelector((state) => state.cart.cartItems);
  const history = useHistory();

  const handleCartTotal = () => {
    const total = itemsToAdd.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    );
    return total;
  };
  return (
    <Drawer
      blockScrollOnMount={false}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bg="green.100">
        <DrawerCloseButton my="1rem" />
        <DrawerHeader my="1rem" className="logo">
          Items Selected
        </DrawerHeader>

        <DrawerBody overflow="scroll">
          {itemsToAdd.length === 0 ? (
            <Flex
              fontSize="lg"
              h="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="black">Your cart is empty.</Text>
            </Flex>
          ) : (
            itemsToAdd.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </DrawerBody>

        <DrawerFooter
          my="1rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading mr="1rem">{handleCartTotal()}$</Heading>
          <Button
            variantColor="pink"
            variant="solid"
            mr={3}
            onClick={() => {
              onClose();
              history.push("/checkout");
            }}
          >
            Go To Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
