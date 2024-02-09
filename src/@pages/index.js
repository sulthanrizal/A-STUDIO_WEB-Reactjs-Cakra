import { Box } from "@chakra-ui/react"
import Header from "../@components/header"
import Home from "../@components/home"
import Service from "../@components/service"
import Helper from "../@components/helper"
import Project from "../@components/project"
import Blog from "../@components/blog"
import Subscribe from "../@components/subscribe"



const Pages = () => {
    return (
        <Box className="container-pages">
            <Header />
            <Home />
            <Service />
            <Helper />
            <Project />
            <Blog />
            <Subscribe />
        </Box>
    )
}
export default Pages;