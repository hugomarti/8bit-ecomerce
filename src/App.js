import React from "react";
import { Box, useDisclosure } from "@chakra-ui/core";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Navbar openCart={onOpen} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage isOpen={isOpen} onClose={onClose} />}
        />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Box>
  );
}

export default App;
