import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const PayAtHotel = () => {
  return (
    <Box ml='10px' h='150px' w='400px' >
        <Text as='b'> <StarIcon color='orange' mb='5px' ml='5px'/> No payment needed today</Text>
            <Text mt='20px' color='gray' fontSize='sm' as='p'>We will confirm your stay without any charge. Pay directly at the hotel during your stay.</Text>
            <Button mt='10px' w='250px' bg='#1ab64f' color='white'>Book Now</Button>
    </Box>
  )
}

export default PayAtHotel