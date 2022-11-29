import { Box,HStack,Image } from '@chakra-ui/react'
import React from 'react'

const Checkout = () => {
  return (
    <Box  m='0%'  >
      <Box p={"14px"} boxShadow='base'>
      <Image  w='95px' ml='12px'   src='https://qph.cf2.quoracdn.net/main-qimg-b8bf0fbc22cdb8223cbb298ea1c0ca67' />
      </Box>

      <Box >Modify your booking</Box>

      <HStack w='70%' m='auto'>
        <Box>1</Box>
        <Box>2</Box>
      </HStack>
    
    </Box>

    
  )
}

export default Checkout