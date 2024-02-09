import { Box, Flex } from "@chakra-ui/react";


const Subscribe = () => {
    return (
        <Box id="subscribe" className="container-subscribe">
            <Box className="content-subscribe">
                <Flex className="header-subscribe">
                    <Box className="content-1-header">
                        <h1>Subscribe Newsletter</h1>
                        <p>I will update good news and promotion service not spam</p>
                    </Box>
                    <Box className="content-2-header">
                        <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f9e77216fadc901b7a6fac_Rectangle%2031.webp" />
                    </Box>
                    <Box className="content-input">
                        <input placeholder="Enter your email addres" />
                        <p> Contact Now</p>
                    </Box>
                </Flex>
            </Box>
            <Box className="footer-container-subscribe">
                <Flex className="footer-content">
                    <Box className="footer-content-1">
                        <h3>A+
                            <span>
                                Studio
                            </span>
                        </h3>
                        <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                        <div className="img-footer-subscribe">
                            <img className="img-footer" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f67547c2d24d6026e40d09_facebook.webp" />
                            <img className="img-footer" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f67551979950e867d489f8_twitter.webp" />
                            <img className="img-footer" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f6755bcfc033072fc9917a_linkedin.webp" />
                        </div>
                    </Box>
                    <Box className="footer-content-2">
                        <h3>
                            What We Do
                        </h3>
                        <p>Web Design</p>
                        <p>App Design</p>
                        <p>Sosial Media Manage</p>
                        <p>Market Analysis Project</p>
                    </Box>
                    <Box className="footer-content-2">
                        <h3>
                            Company
                        </h3>
                        <p>Web Design</p>
                        <p>App Design</p>
                        <p>Sosial Media Manage</p>
                        <p>Market Analysis Project</p>
                    </Box>
                    <Box className="footer-content-2">
                        <h3>
                            Support
                        </h3>
                        <p>Web Design</p>
                        <p>App Design</p>
                        <p>Sosial Media Manage</p>
                        <p>Market Analysis Project</p>
                    </Box>
                    <Box className="footer-content-2">
                        <h3>
                            Contact
                        </h3>
                        <p>Web Design</p>
                        <p>App Design</p>
                        <p>Sosial Media Manage</p>
                        <p>Market Analysis Project</p>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default Subscribe;