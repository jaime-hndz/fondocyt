import {BrowserRouter as Router, Route, Routes } from 'react-router';
import { AppContextProvider } from '@/context/AppContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { PrivateRoutes } from './PrivateRoutes';
import { Herramienta4 } from '@/components/screens/private/Herramienta4';
import { PublicRoutes } from './PublicRoutes';
import { HomeScreen } from '@/components/home/HomeScreen';
import { Herramienta1 } from '@/components/screens/public/Herramienta1';
import { Herramienta2 } from '@/components/screens/public/Herramienta2';
import { Herramienta3 } from '@/components/screens/public/Herramienta3';
import LoginScreen from '@/components/login/LoginScreen';
import { NotFoundScreen } from '@/components/notfound/NotFoundScreen';

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