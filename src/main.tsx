import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';

import { initMocks } from './services/http/mocks';

async function startApp() {
  await initMocks();

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

startApp();
