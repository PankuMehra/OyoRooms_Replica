import { Box, Button, Grid, Heading, Input, InputGroup, InputLeftAddon, Text} from '@chakra-ui/react'
import React from 'react'

const CustomerDetails = () => {
  return (
    <Box   textAlign='left' w='700px'  >
    <Box borderRadius='5px' textAlign='center' mb='20px'  color='#d59560' bg='#fef6e9' p='10px' border='1px solid yellow'>🎉 Yay! you just saved ₹1201 on this booking!</Box>

    <Box borderRadius='5px' border='1px solid gray'>
    <Box textAlign='left' bg='#f9f9fb' p='20px'><Heading as='h2' size='md'>Enter your details</Heading></Box>

    <Box p='20px'>We will use these details to share your booking information</Box>

    <Grid p='20px' templateColumns='repeat(2, 1fr)' gap={6}>
      <Box>
        <Text  as="b">Full Name</Text>
        <Input mt='8px' placeholder='Enter First and Last Name' />
      </Box>
      
      <Box>
        <Text as="b">Email Address</Text>
        <Input mt='8px' placeholder='name@abc.com' />
      </Box>

      <Box>
        <Text as="b">Mobile Number</Text>
        <InputGroup mt='8px'>
        <InputLeftAddon children='+91' />
        <Input  type='tel' placeholder='phone number' />
        </InputGroup>
      </Box>
    </Grid>

    <Box p='20px'>
      <Button h='50px' w='220px' bg='#1ab64f' color='white' size='md'>Continue</Button>
    </Box>

    </Box>
    <Box color='gray' borderRadius='5px' mt='10px' textAlign='left'  p='15px' border='1px solid gray'>Complete your booking</Box>
    </Box>
  )
}

export default CustomerDetails