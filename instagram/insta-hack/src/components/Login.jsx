import React, { useState } from 'react'
import { Box, Input, Text, Image, Button, Flex, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {


    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const toast = useToast()
    const navigate = useNavigate()


    async function adduserLogin() {
        console.log(name, password)
        console.log("click1")
        const payload = {
            username: name,
            userpassword: password
        }
        try {

            let res = await axios.post("https://tender-puce-sandals.cyclic.app/loginuserroute/useradd", payload)
            console.log(res)




        } catch (error) {
            console.log(error)

        }
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        setTimeout(() => {
            navigate("/wait")

        }, 2000)

    }


    return (
        <Box border="1px solid red" w="450px" h="650px" bg="whitesmoke">
            {/* <Text fontStyle="italic">Instagram</Text> */}
            <Image src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png" alt="insta" h="200px" w="100%" />
            <Input w="80%" borderRadius="none" placeholder='Phone number,email or username' _focus="none" onChange={(e) => setName(e.target.value)} />
            <Input w="80%" borderRadius="none" placeholder='Password' _focus="none" mt="20px" mb="20px" onChange={(e) => setPassword(e.target.value)} />
            <Button _hover={{ background: "blue.300", border: "none" }} w="80%" bg="blue.300" borderRadius="10px" color="white" textDecoration="bold" mb="30px"
                onClick={adduserLogin}
            >Log in</Button>

            <Flex gap="10px">
                <Box borderBottom="1px solid red" w="34%" ml="50px"> </Box>
                <Text >OR</Text>
                <Box borderBottom="1px solid red" w="34%"></Box>
            </Flex>
            <Flex ml="130px" gap="20px" mt="30px">
                <Image src="https://img.icons8.com/?size=1x&id=bCMbQhDFIiGQ&format=png" alt="facebook" w="25px" h="25px" />
                <Text>Log in with Facebook</Text>
            </Flex>
            <Text mt="20px" fontSize="12px">Forget Password ?</Text>
            <Button onClick={() => navigate("/wait")}>move</Button>
        </Box>
    )
}

export default Login