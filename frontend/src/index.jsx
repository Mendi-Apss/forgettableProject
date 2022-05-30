import React from 'react'
import * as ReactDOM from 'react-dom/client';
import { App } from './App';

// creates a Document Object Module to control the app
const root = ReactDOM.createRoot(
    document.getElementById('root')
)

// render app components
root.render(
    <App />
)