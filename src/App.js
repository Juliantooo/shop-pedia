import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import LayoutMain from './layouts/LayoutMain';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router/routes';

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
          <LayoutMain>
            <Switch>
              {
                routes.map((route, idx) => {
                  return (
                    route.component && (
                      <Route
                        exact={route.exact} key={idx} path={route.path} name={route.name} render={props => <route.component {...props} />} />
                    )
                  )
                })
              }
            </Switch>
          </LayoutMain>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
