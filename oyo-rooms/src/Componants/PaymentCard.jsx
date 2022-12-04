
import { Box, Button, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import {BsLockFill} from 'react-icons/bs'
import PayAtHotel from './PayAtHotel'
import PayNow from './PayNow'


const PaymentCard = () => {
    const [paynow, setPayNow] = React.useState(false)
  return (
    <Box border='1px solid gray' borderRadius='5px' mt='20px' mb='50px'>

    <Box bg='#f9f9fb' display='flex' justifyContent='space-between'>
    <Box p='20px'><Heading fontSize={'2xl'} as='h2'>2. Complete your booking</Heading></Box>
    <Box  p='25px'><Text color='green' fontSize={'sm'} as='spam'> 100% Secure payments</Text></Box>
    </Box>

    <Box display='flex' p='20px' >
        <Box >
            <Box onClick={()=>setPayNow(false)} p='20px' w='200px' boxShadow='md'><Text as='b'>Pay At Hotel</Text></Box>
            <Box onClick={()=>setPayNow(true)} p='20px' w='200px' boxShadow='md'><Text as='b'>Pay Now</Text></Box>
            
        </Box>
        <Box textAlign='center' >
        
            {paynow ? <PayNow /> : <PayAtHotel/>}
        </Box>
    </Box>

        
    </Box>
  )
}

export default PaymentCard