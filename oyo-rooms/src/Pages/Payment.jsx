import { Box, Heading, Text,Image, Button, Skeleton, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import breakfast from '../Images/breakfastcards.png'
import { URL } from '../URL';

const Payment = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  



  useEffect(()=>{
    setLoading(true)
     fetch(`${URL.hotel}/1`)
     .then((res)=>res.json())
     .then((res2)=> setData(res2))
     .catch((error)=> setError(true))
     .finally(()=>setLoading(false))
  },[])
  console.log(data)

  if(loading){
    return (
      
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
    )
  }

  if(error){
    <Box mt='50px'>
      <Heading color={'red'}>Something went wrong please refresh</Heading>
    </Box>
  }


  return (
    <Box>

      <Box  p={"14px"} boxShadow='base'>
      <Image  w='95px' ml='12px'   src='https://qph.cf2.quoracdn.net/main-qimg-b8bf0fbc22cdb8223cbb298ea1c0ca67' />
      </Box>

    <Box textAlign={'left'} w='76%' m='auto' >
      <Box m='10px' mt="30px">
        <Heading color='green'>Great! Your stay is confirmed.</Heading>
        <Text as='b'>You will soon recieve an email confirmation debuvats@gmail.com</Text> <br />
        <Button mt='30px' mb='30px' w='180px' h='40px' border='2px solid black' bg='white' color='black' >Print</Button>
      </Box>

      <Box p='20px' boxShadow='lg'>
      <Heading fontSize='25px'> Booking ID</Heading>
      <Text mt='5px' as='p' fontSize='20px'>abcd1234</Text>

      <hr
        style={{
            
            backgroundColor: "gray",
            height: "2px",
            marginTop:'20px',
            marginBottom: '20px'
        }} />

      <Box display='flex'>
        <Box w='1000px'>
        <Heading fontSize='lg'>{`Hotel NAme`}</Heading>
        <Text>{`city`}</Text>

        <Heading mt='10px' fontSize='md'>{`Hotel Direction`}</Heading>
        <Text>{`address`}</Text>
         
        <Heading mt='10px' fontSize='md'>{`Primery Guest`}</Heading>
        <Text>{`address`}</Text> 

        <Heading mt='5px' fontSize='md'>{`Email address`}</Heading>
        <Text>{`address`}</Text>

        <Heading mt='5px' fontSize='md'>{`Phone Number`}</Heading>
        <Text>{`address`}</Text>


        </Box>

        <Box>
            <Image w='300px' h='180px' src='https://images.oyoroomscdn.com/uploads/hotel_image/35611/large/97117bd4d09cab20.jpg' />
        </Box>
      </Box>

      <hr
        style={{
            
            backgroundColor: "gray",
            height: "2px",
            marginTop:'20px',
            marginBottom: '20px'
        }} />

        <box>
          <Image src={breakfast} />
        </box>

        <hr
        style={{
            
            backgroundColor: "gray",
            height: "2px",
            marginTop:'20px',
            marginBottom: '20px'
        }} />


        

      </Box>

      

      
    </Box>
    </Box>
  )
}

export default Payment