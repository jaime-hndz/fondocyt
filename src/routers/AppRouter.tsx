import {BrowserRouter as Router, Route, Routes } from 'react-router';
import { AppContextProvider } from '@/context/AppContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import LoginScreen from '@/screens/public/login/LoginScreen';
import { NotFoundScreen } from '@/screens/public/notfound/NotFoundScreen';
import { HomeScreen } from '@/screens/public/home/HomeScreen';
import { NavItems } from '@/helpers/NavItems';

export const AppRouter = () => {
  return (
    <AppContextProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route element={<PrivateRoutes />}>
              {/* Rutas privadas */}
            </Route>
            <Route element={<PublicRoutes />}>
              <Route element={<HomeScreen />} path='/'/>
              <Route element={<LoginScreen />} path='/login' />
              {NavItems.map((item, i)=> (
                <Route key={i} element={<item.element />} path={item.route} />
              ))}

              <Route path='*' element={<NotFoundScreen />} />
            </Route>
          </Routes>
        </AppLayout>
      </Router>
    </AppContextProvider>
  )
}