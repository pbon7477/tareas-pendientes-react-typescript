import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css';
import ToDoApp from './components/ToDoApp';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>,
)
