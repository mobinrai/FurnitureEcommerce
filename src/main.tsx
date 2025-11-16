import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { theme } from './ThemeWrapperProvider.ts'
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router'
import router from './routes'
import './App.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider> 
  </StrictMode>,
)
