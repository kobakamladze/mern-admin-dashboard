import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { themeSettings } from './theme';
import BasicLayout from './layouts/BasicLayout';
import Dashboard from './layouts/Dashboard';
import Products from './layouts/Products';
import Customers from './layouts/Customers';
import Transactions from './layouts/Transactions';
import Geography from './layouts/Geography';
import Overview from './layouts/Overview';
import Monthly from './layouts/Monthly';
import Breakdown from './layouts/Breakdown';
import Admin from './layouts/Admin';

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
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
