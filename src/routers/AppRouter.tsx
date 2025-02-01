import {BrowserRouter as Router, Route, Routes } from 'react-router';
import {PrivateRoutes} from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { AppContextProvider } from '../context/AppContext';
import { LoginScreen } from '../components/screens/public/LoginScreen';
import { HomeScreen } from '../components/screens/public/HomeScreen';
import { NotFoundScreen } from '../components/screens/public/NotFoundScreen';
import { Herramienta1 } from '../components/screens/public/Herramienta1';
import { AppLayout } from '../components/layout/AppLayout';
import { Herramienta4 } from '../components/screens/private/Herramienta4';
import { Herramienta3 } from '../components/screens/public/Herramienta3';
import { Herramienta2 } from '../components/screens/public/Herramienta2';



export const AppRouter = () => {
  return (
    <AppContextProvider>
      <Router>
        <AppLayout>

        <Routes>
          <Route element={<PrivateRoutes />}>
          <Route element={<Herramienta4 />} path='/herramienta4'/>
          </Route>
          <Route element={<PublicRoutes />}>
            <Route element={<HomeScreen />} path='/'/>
            <Route element={<Herramienta1 />} path='/herramienta1'/>
            <Route element={<Herramienta2 />} path='/herramienta2'/>
            <Route element={<Herramienta3 />} path='/herramienta3'/>
            <Route element={<LoginScreen />} path='/login' />
            <Route path='*' element={<NotFoundScreen />} />
          </Route>
        </Routes>
        </AppLayout>

      </Router>
    </AppContextProvider>
  )
}