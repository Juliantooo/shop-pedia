import { ChakraProvider } from '@chakra-ui/react';
import LayoutMain from './layouts/LayoutMain';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ChakraProvider>
      <LayoutMain/>
    </ChakraProvider>
  );
}

export default App;
