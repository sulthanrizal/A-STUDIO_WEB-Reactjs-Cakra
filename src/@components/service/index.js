import { Box, Flex, Text } from "@chakra-ui/react";



const Service = () => {
    return (
        <Box id="service" className="container-service" >
            <Flex className="content-container">
                <Box className="row-1-service">
                    <Box className="row-1-p">
                        <Text>
                            Our Client
                        </Text>
                    </Box>
                    <Box className="row-2-p">
                        <Text>
                            Several selected clients, who already believe in our service.
                        </Text>
                    </Box>
                </Box>
                <Box className="row-4-service">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f66842cf5ffa1e13487f4c_Google%20Logo.webp" />
                </Box>
                <Box className="row-3-service">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f6684bde6a3c3dd1b2d52f_Airbnb%20Logo.webp" />
                </Box>
                <Box className="row-2-service">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f66853998c563fd4229943_Uber%20Eats%20Logo.webp" />
                </Box>
                <Box className="row-2-service">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f668614361130aa2d83644_Amazon%20Logo.webp" />
                </Box>
            </Flex>
        </Box>
    )
}
export default Service;