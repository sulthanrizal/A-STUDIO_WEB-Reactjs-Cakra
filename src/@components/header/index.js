import { Box, Flex } from "@chakra-ui/react"
import { useState } from "react";
import "./styles.scss";
import { useEffect } from "react";


const Header = () => {
    const [state, setState] = useState({
        home: null,
        service: null,
        blog: null,
        helper: null,
        project: null,
        subscribe: null
    })
    useEffect(() => {
        const home = document.getElementById('home')
        const service = document.getElementById('service')
        const helper = document.getElementById('helper')
        const project = document.getElementById('project')
        const blog = document.getElementById('blog')
        const subscribe = document.getElementById('subscribe')

        setState({
            home, service, helper, project, blog, subscribe
        })

    }, [])

    const onScroll = ({ element }) => {
        window.scrollTo({ top: element?.offsetTop, behavior: 'smooth' })
    }
    return (
        <Box>
            <Flex>
                <Box className="headerContainer">
                    <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f65bd183e767dbe6856640_A%2B%20Studio.webp" />
                    <Flex className="title-header">
                        <a onClick={() => { onScroll({ element: state.home }) }}>Home</a>
                        <a onClick={() => { onScroll({ element: state.service }) }}>Service</a>
                        <a onClick={() => { onScroll({ element: state.helper }) }}>What Whe Do</a>
                        <a onClick={() => { onScroll({ element: state.project }) }} >Project</a>
                        <a onClick={() => { onScroll({ element: state.blog }) }} >Blog</a>
                        <a onClick={() => { onScroll({ element: state.subscribe }) }}>Subscribe</a>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Header;