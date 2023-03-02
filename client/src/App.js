import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { themeSettings } from './theme';
import BasicLayout from './pages/BasicLayout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Transactions from './pages/Transactions';
import Geography from './pages/Geography';
import Overview from './pages/Overview';
import Monthly from './pages/Monthly';
import Breakdown from './pages/Breakdown';
import Admin from './pages/Admin';
import Performance from './pages/Performance';

function App() {
  const mode = useSelector(state => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<BasicLayout />}>
              <Route
                path="/"
                element={<Navigate to="/dashboard" />}
                replace
              ></Route>
              <Route path="/dashboard" element={<Dashboard />} replace></Route>
              <Route path="/products" element={<Products />} replace></Route>
              <Route path="/customers" element={<Customers />} replace></Route>
              <Route
                path="/transactions"
                element={<Transactions />}
                replace
              ></Route>
              <Route path="/geography" element={<Geography />} replace></Route>
              <Route path="/overview" element={<Overview />} replace></Route>
              <Route path="/monthly" element={<Monthly />} replace></Route>
              <Route path="/breakdown" element={<Breakdown />} replace></Route>
              <Route path="/admin" element={<Admin />} replace></Route>
              <Route
                path="/performance"
                element={<Performance />}
                replace
              ></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
