import { Box, Button, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {BsLockFill} from 'react-icons/bs'

const PaymentCard = () => {
  return (
    <Box border='1px solid gray' borderRadius='5px' mt='20px' mb='50px'>

    <Box bg='#f9f9fb' display='flex' justifyContent='space-between'>
    <Box p='20px'><Heading fontSize={'2xl'} as='h2'>Complete your booking</Heading></Box>
    <Box  p='25px'><Text color='green' fontSize={'sm'} as='spam'> 100% Secure payments</Text></Box>
    </Box>

    <Box display='flex' p='20px' >
        <Box >
            <Box>Pay At Hotel</Box>
            <Box>Pay Now</Box>
        </Box>
        <Box>
            <Text as='b'>No payment needed today</Text>
            <Text as='p'>We will confirm your stay without any charge. Pay directly at the hotel during your stay.</Text>
            <Button bg='#1ab64f' color='white'>Book Now</Button>
        </Box>
    </Box>

        
    </Box>
  )
}

export default PaymentCard