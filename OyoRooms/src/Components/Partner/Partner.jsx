import React from "react";
import PartnerTop from "./PartnerTop/PartnerTop";

import { ChakraProvider } from "@chakra-ui/react";

const Partner = () => {
  return (
    <div id="partner">
      <ChakraProvider>
        <PartnerTop />
      </ChakraProvider>
    </div>
  );
};

export default Partner;
