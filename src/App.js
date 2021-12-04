import { ChakraProvider } from '@chakra-ui/react';
import LayoutMain from './layouts/LayoutMain';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './app/store';
import { listen } from './app/listener';

function App() {
  React.useEffect(() => {
    listen();
  }, [])
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LayoutMain />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
