import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import AuthChecker from './auth/AuthChecker';
import AuthGuest from './auth/AuthAnonymously';
import { Provider } from 'react-redux';

import routes from './config/routes';
import Navbar from './components/Navbar';
import { store } from './redux/slices/store';


function App() {
  
  return (
    <>
        <HashRouter>
            <Navbar />
            <Provider store = { store }>
            <Routes>
                { routes.map((route, index) => (
                    <Route
                        key = { index }
                        path = { route.path }
                        element = {
                            route.protected ? (
                            <AuthGuest>
                                <route.component />
                            </AuthGuest>
                            ) : (
                                <route.component />
                            )
                            }
                            />
                    )) }
          </Routes>
          </Provider>
        </HashRouter>
    </>
    
  )
}

export default App

