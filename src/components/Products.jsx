import React from "react";
import { Flex } from "@chakra-ui/core";

import Product from "./Product";

const Products = ({ items }) => {
  return (
    <Flex
      w="100%"
      m="auto"
      flexWrap="wrap"
      justifyContent="center"
      alignContent="center"
    >
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default Products;
