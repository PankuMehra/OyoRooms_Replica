import { Box, Heading, Text,Image, Link } from '@chakra-ui/react'
import React from 'react'

const Payment = () => {
  return (
    <Box>
      <Box mt="50px">
        <Heading color='green'>Great! Your stay is confirmed.</Heading>
        <Text as='b'>You will soon recieve an email confirmation debuvats@gmail.com</Text>
      </Box>

      <Box m='auto' mt='30px' >
          <Box><Heading>Thanku for Choosing</Heading></Box>
          <Box m='auto' mb='20px' w='500px'><Image mt='20px' w='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4dFrs5GiFEcFDdDBCB9vtm983siVya-FzQpkrkbzifweWyV3sIte82pd_kDBSLX9OTQ&usqp=CAU' /></Box>
          <Link >click here to choose more...</Link>
      </Box>
    </Box>
  )
}

export default Payment