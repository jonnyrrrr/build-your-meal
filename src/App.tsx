import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import { Provider} from 'react-redux'
import { store } from './redux/store'
import AccordionUsage from 'src/components/Accordion'



import routes from './config/routes'
import AuthChecker from './auth/AuthChecker'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Provider store={store}>
      <Routes>
        { routes.map( (route, index) =>  (
          <Route
          key={index}
          path={route.path}
          element={
            route.protected ? (
            <AuthChecker>
              <route.component />
            </AuthChecker>
            ) : (
              <route.component/>
            )
          }
          />
        )) }
      </Routes>
    </Provider>
  </BrowserRouter>
  )
}

export default App
