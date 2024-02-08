import { Box, ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderProvider from './@components/headerProvider';
import Pages from './@pages';

function App() {
  return (
    <ChakraProvider>
      <Router>

        <Box className='app-container'>
          <HeaderProvider>
            <Routes>
              <Route path='/' element={<Pages />} />
            </Routes>
          </HeaderProvider>
        </Box>

      </Router>
    </ChakraProvider>
  );
}

export default App;
