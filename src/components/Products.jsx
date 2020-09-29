import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/core";

import Product from "./Product";

const Products = ({ items }) => {
  return (
    <Box w="94%" m="auto">
      <Heading textAlign="center" m="2rem" color="white">
        Products
      </Heading>
      <Flex w="100%" m="0 auto" flexWrap="wrap" justifyContent="center">
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default Products;
