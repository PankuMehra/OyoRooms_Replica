import { Box, Heading, HStack,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {FaRegCalendarAlt} from 'react-icons/fa'

const HotelBookingDetails = () => {
  return (
    <Box mb='50px' p='20px' w='420px' h='580px'  border='1px solid gray'>

    <HStack >
      <Box textAlign='left'>
      <Heading as='h4' size='sm'>Capital O 13586 Hotel Monarch</Heading>
      <Text as='p'>Rating</Text>
      <Text as='b'> Night</Text>

      </Box>
      <Box >
        <Image ml={'30px'} borderRadius='5px' w='80px' src='https://images.oyoroomscdn.com/uploads/hotel_image/35611/thumb/1428e52ba3aab7b4.jpg' />
      </Box>
    </HStack>

    <Box mt='30px' textAlign='left' display='flex'>
      <Box pt='10px' pb='10px'pr='10px' display='flex'   borderBottom='0.1px solid gray' borderRight='0.1px solid gray'>
      <Box p={'5px'}  ><FaRegCalendarAlt /></Box>
      <Box> Wed, 30 Nov - Thu, 1 Dec</Box>
      </Box>
      <Box p='10px' borderBottom='0.1px solid gray' >1 Room, 2 Guests</Box>
    </Box>

    <Box pt='10px' pb='10px'pr='10px' display='flex'  >
      <Box p={'5px'}  ><FaRegCalendarAlt /></Box>
      <Box> Club</Box>
      </Box>

      <Box mt='30px' display='flex' justifyContent='space-between'>
        <Box>Room price for 1 Night X 2 Guests</Box>
        <Box as='b'>₹2737</Box>
      </Box>

      <Box mt='30px' display='flex' justifyContent='space-between'>
        <Box>Price Drop</Box>
        <Box as='b'>₹856</Box>
      </Box>

      <Box mt='30px' display='flex' justifyContent='space-between'>
        <Box>55% Coupon Discount</Box>
        <Box as='b'>₹1035</Box>
      </Box>

      <Box mt='30px' mb='30px' display='flex' justifyContent='space-between'>
        <Box>OYO Money Applied</Box>
        <Box as='b'>₹273</Box>
      </Box>

      <hr  />

      <Box mt='30px' mb='30px' display='flex' justifyContent='space-between'>
        <Box>
        <Text as={'p'}>Payable Amount</Text>
        <Text as={'p'} fontSize='xs' >inclusive of all taxes</Text>
        </Box>
        <Box><Text as='b' fontSize='2xl' >₹618</Text></Box>
      </Box>

    


    </Box>
  )
}

export default HotelBookingDetails