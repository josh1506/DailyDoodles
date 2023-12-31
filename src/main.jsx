import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './assets/styles/main.scss'
import './assets/styles/text-sizes.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
