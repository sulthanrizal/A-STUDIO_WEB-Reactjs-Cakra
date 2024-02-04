import { Box, Flex, Link, Text } from "@chakra-ui/react"


const Home = () => {
    return (
        <Box className="home-container">
            <Flex className="row-container">
                <Box className="row-1">
                    <Text>A Digital Product Agency</Text>
                    <Text className="p-last-child">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</Text>
                    <Link>Contact Now</Link>
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/6419e775c04c0ad92d0ce6b8_Dot%20Ornament.png" />
                </Box>
                <Box className="row-2">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f9f79176d6a391d351320d_Group%2075.webp" />
                </Box>
            </Flex>
        </Box>
    )
}

export default Home