import { Box, Flex } from "@chakra-ui/react"

const Blog = () => {
    return (
        <Box id="blog" className="container-blog">
            <Box className="header-content-blog">
                <h2>What our happy client say</h2>
                <p>Several selected clients, who already believe in our service.</p>
            </Box>
            <Flex className="body-content-blog">
                <Box className="body-content-1">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb4a64303f205ac03944d6_Group%2079.webp" />
                </Box>
                <Box className="body-content-2">
                    <h3>Matthew Paul</h3>
                    <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
                    <Flex>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </Flex>
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb5fc86b8a4b850fa0e2b1_Rectangle%2032.webp" />
                </Box>
                <Box className="body-content-3">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb49c4911c6f28c5eecca9_Group%2077.webp" />
                </Box>
            </Flex>
        </Box>
    )
}
export default Blog;