import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Payment = () => {
  return (
    <Box>
      <Box>
        <Heading color='green'>Great! Your stay is confirmed.</Heading>
        <Text as='b'>You will soon recieve an email confirmation debuvats@gmail.com</Text>
      </Box>
    </Box>
  )
}

export default Payment