import React from "react";

import Products from "../components/Products";
import CartDrawer from "../components/CartDrawer";
import { Box } from "@chakra-ui/core";
import { useSelector } from "react-redux";

const HomePage = ({ isOpen, onClose }) => {
  const items = useSelector((state) => state.items);

  return (
    <Box my="1rem">
      <Products items={items} />
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default HomePage;
