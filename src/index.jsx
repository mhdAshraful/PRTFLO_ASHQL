import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ContextWrapper } from './ContextAPI'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextWrapper>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ContextWrapper>
    </React.StrictMode>
)
