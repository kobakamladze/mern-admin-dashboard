import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { themeSettings } from './theme';
import BasicLayout from './layouts/BasicLayout';
import Dashboard from './layouts/dashboard/Dashboard';
import CatalogLayout from './layouts/CatalogLayout';

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
              <Route
                path="/products"
                element={<CatalogLayout />}
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
