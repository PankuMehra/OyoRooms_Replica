import { Box,Button,Image,Input,Text } from '@chakra-ui/react'
import React from 'react'

const PayNow = () => {
  return (
    <Box textAlign='center' w='400px' h='150px' >
    <Box w='200px' m='auto'  alignItems='center'    display='flex'>
        <Box ><Image w='60px' src='https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png' /> </Box>
        <Box ml='10px' > <Text as='b'>Google Pay</Text></Box>
    </Box>

    <Box>
        <Input w='200px' placeholder='Enter mobile number' /> <br />
        <Button mt='5px' bg='#1ab64f' color='white' w='200px'>Pay</Button>
    </Box>
    </Box>
  )
}

export default PayNow