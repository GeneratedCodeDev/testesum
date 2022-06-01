import { Routes, Route } from 'react-router-dom'
import Autorizacao from '../layouts/Autorizacao';
import Login from '../../src/pages/Login';
import LandingPage from '../layouts/LandingPage';
import OrdensdeProducao from '../../src/pages/OrdensdeProducao';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<Autorizacao/>} />
<Route  path='/autorizacao' element={<Autorizacao/>} >
<Route index  element={<Login/>} />
<Route  path='login' element={<Login/>} />
</Route>
<Route  path='/landing-page' element={<LandingPage/>} >
<Route index  element={<OrdensdeProducao/>} />
<Route  path='ordensde-producao' element={<OrdensdeProducao/>} />
</Route>
</Routes>
);
export default IndexRoutes;
