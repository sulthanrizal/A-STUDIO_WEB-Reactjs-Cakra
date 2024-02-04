import { Box, ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './@components/header';
import HeaderProvider from './@components/headerProvider';

function App() {
  return (
    <ChakraProvider>
      <Router>

        <Box className='app-container'>
          <HeaderProvider>
            <Routes>
              <Route path='/' element={<Header />} />
            </Routes>
          </HeaderProvider>
        </Box>

      </Router>
    </ChakraProvider>
  );
}

export default App;
