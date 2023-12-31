import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { Routes, Route } from 'react-router-dom';
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
import Dashboard from './scenes/Dashboard/Dashboard';
import Category from './scenes/Category/Category';
import ViewProduct from './components/ViewProduct';
import ViewOrderDetail from './scenes/ViewOrderDetail/ViewOrderDetail';
import Product from './scenes/Product/Product';
import TableManagement from './scenes/TableManagement/TableManagement';
import OnlineOrderManagement from './scenes/OnlineOrderManagement/OnlineOrderManagement';
import OfflineOrderManagement from './scenes/OfflineOrderManagement/OfflineOrderManagement';
import Login from './scenes/Login/Login';
import Combo from './scenes/Combo/Combo';
import { useState, createContext } from 'react';
import ViewOnlineOrderDetail from './scenes/ViewOnlineOrderDetail/ViewOnlineOrderDetail'
import Statistical from './scenes/Statistical/Statistical';
import TeamManagement from './scenes/Team/TeamManagement';
export const RoleContext = createContext();

function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState(localStorage.getItem("accessToken"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const handleLogin = () => {
    window.location.reload();
  }

  return (
    <>
      {
        isLogin ? (
          <>
            <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <RoleContext.Provider value={role}>
                  <div className="app" >
                    <SideBar />
                    <main className='content'>
                      <TopBar />
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/viewProductByIdCategory" element={<Product />} />
                        <Route path='/product' element={<Product />} />
                        <Route path="comboManagement" element={<Combo />} />
                        <Route path='/tableManagement/viewOrderDetail/:id' element={<ViewOrderDetail />} />
                        <Route path='/tableManagement' element={<TableManagement />} />
                        <Route path='offlineOrderManagement' element={<OfflineOrderManagement />} />
                        <Route path='/onlineOrderManagement' element={<OnlineOrderManagement />} />
                        <Route path='/viewDetailProduct/:id' element={<ViewProduct />} />
                        <Route path='/viewOnlineOrderDetail/:id' element={<ViewOnlineOrderDetail />} />
                        <Route path='/teamManagement' element={<TeamManagement />} />
                        <Route path='/statistical' element={<Statistical />} />
                      </Routes>
                    </main>
                  </div>
                </RoleContext.Provider>
              </ThemeProvider>
            </ColorModeContext.Provider></>
        ) : (<Login login={handleLogin} />)
      }
    </>


  );
}

export default App;
