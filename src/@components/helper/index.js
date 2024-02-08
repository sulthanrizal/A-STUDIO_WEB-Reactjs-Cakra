import { Box, Flex } from "@chakra-ui/react"



const Helper = () => {
    return (
        <Box id="helper" className="container-helper">
            <Flex className="content-helper">
                <Box className="colums-1-helper">
                    <img className="img-colums-1-helper" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb5c4d478a9680e87c2e70_Rectangle%2034.webp" />
                    <img className="img-colums-2-helper" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb5c7a1ed0513a86d31f50_Rectangle%2025.webp" />
                    <Box className="content-p-colums-1" >
                        <h1>How we can help your Business?</h1>
                        <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                    </Box>
                    <img className="img-colums-3-helper" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fbb954300f0cf660a477c5_craz.png" />
                </Box>
                <Box className="colums-2-helper">
                    <img className="img-1-colums-2" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/6419f24ad6223c8824600b10_1133.webp" />
                    <Box className="content-img-colums-2">
                        <Box className="card-container">
                            <div className="img-content" style={{ backgroundColor: '#dfe8f5' }}>
                                <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f7bb4fabd16f32fc7b5316_box-search%201.webp" />
                            </div>
                            <div className="content-p-colums-2">
                                <h1>Business Idea Planning </h1>
                                <p>We present you a proposal and discuss niffty-gritty like</p>
                            </div>
                        </Box>
                        <Box className="card-container content" >
                            <div className="img-content" style={{ backgroundColor: '#fff7e3' }}>
                                <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f7bb4fb44d3328397bfbae_empty-wallet%201.webp" />
                            </div>
                            <div className="content-p-colums-2">
                                <h1>Financial Planning System</h1>
                                <p>Protocols apart from aengage models, pricing billing</p>
                            </div>
                        </Box>
                        <Box className="card-container">
                            <div className="img-content" style={{ backgroundColor: '#f1d6e3' }}>
                                <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f7bb4fd6198a7dc80b449c_code-1%201.webp" />
                            </div>
                            <div className="content-p-colums-2">
                                <h1 style={{ width: '240px' }}>Development Website and App</h1>
                                <p>Communication protocols apart from engagement models</p>
                            </div>
                        </Box>
                        <Box className="card-container content" >
                            <div className="img-content" style={{ backgroundColor: '#caf3de' }}>
                                <img src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63f7bb4ff9863a300aeac4ee_chart-square%201.webp" />
                            </div>
                            <div className="content-p-colums-2">
                                <h1>Market Analysis Project</h1>
                                <p>Protocols apart from aengage models, pricing billing</p>
                            </div>
                            <img className="img-content-last" src="https://assets-global.website-files.com/63f25198ca4bd80d6ddf1ef4/63fb583da506ca44c4308fd1_purple.webp" />
                        </Box>

                    </Box>
                </Box>
            </Flex >
        </Box >
    )
}
export default Helper;