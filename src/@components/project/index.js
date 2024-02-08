import { Box, Text } from "@chakra-ui/react"


const Project = () => {
    return (
        <Box id="project" className="container-project">
            <Box className="container-content-project">
                <Box className="header-content-project">
                    <Box className="content-project-1">
                        <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb53fb8bac0a91545dad92_Ellipse%2086.webp" />
                        <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f7d7ba6c0317211477c7f7_unsplash_bzqU01v-G54.webp" />
                    </Box>
                    <Box className="content-project-2">
                        <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb537876d6a33cc1694c14_Rectangle%2026.webp" />
                        <h1>Great Digital Product Agency since 2016</h1>
                        <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Project