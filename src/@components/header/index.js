import { Box, Flex, Text } from "@chakra-ui/react"
import "./styles.scss";
import Home from "../home";
import Service from "../service";


const Header = () => {
    return (
        <Box>
            <Flex>
                <Box className="headerContainer">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f65bd183e767dbe6856640_A%2B%20Studio.webp" />
                    <Flex className="title-header">
                        <Text>Home</Text>
                        <Text>Service</Text>
                        <Text>What Whe Do</Text>
                        <Text>Project</Text>
                        <Text>Blog</Text>
                        <Text>Subscribe</Text>
                    </Flex>
                </Box>
            </Flex>
            <Home />
            <Service />
        </Box>
    )
}

export default Header;