import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './react_learn.css'
import App from './App.tsx'
import MyApp from './MyApp.tsx'
import AboutPage from './AboutPage.tsx'
import Profile from './Profile.tsx'
import ShoppingList from './ShoppingList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MyApp />
    <AboutPage />
    <Profile />
    <ShoppingList />
  </StrictMode>,
)
