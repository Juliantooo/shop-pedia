import React, { Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router/routes';
import UseLayout from './hooks/useLayout';
import { ChakraProvider } from '@chakra-ui/react';
import './assets/css/tailwind.css';

function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={loading}>
          <Switch>
            {
              routes.map((route, idx) => {
                return (
                  route.component && (
                    <UseLayout
                      key={idx}
                      exact={route.exact}
                      path={route.path}
                      name={route.name}
                      useLayout={route.useLayout}
                      component={route.component}
                    />
                  )
                )
              })
            }
          </Switch>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
