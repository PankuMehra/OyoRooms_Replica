import { Box,HStack,Image,Text } from '@chakra-ui/react'
import React from 'react'
import CustomerDetails from '../Componants/CustomerDetails';
import HotelBookingDetails from '../Componants/HotelBookingDetails';
import {ChevronLeftIcon} from '@chakra-ui/icons'

const Checkout = () => {
  return (
    <Box   m='0%'  >
      <Box p={"14px"} boxShadow='base'>
      <Image  w='95px' ml='12px'   src='https://qph.cf2.quoracdn.net/main-qimg-b8bf0fbc22cdb8223cbb298ea1c0ca67' />
      </Box>

      <Box ml='200px' mt='30px'   textAlign='left' color='red.500'   ><Text as='b' > <ChevronLeftIcon /> Modify your booking </Text></Box>

      <HStack w='70%' m='auto' mt='30px'>
        <Box mr='20px' mt='-40px'>
          <CustomerDetails />
        </Box>

        <Box>
          <HotelBookingDetails />
        </Box>
      </HStack>
    
    </Box>

    
  )
}

export default Checkout