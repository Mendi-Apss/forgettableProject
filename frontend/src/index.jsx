import React from 'react'
import * as ReactDOM from 'react-dom/client';
import { App } from './app';
import { CookiesProvider } from 'react-cookie';
import './stylesheet/index.css'

// creates a Document Object Module to control the app
const root = ReactDOM.createRoot(
    document.getElementById('root')
)

// render app components
root.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>
)