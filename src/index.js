import React from 'react';
import { createRoot } from 'react-dom/client';
// Since React 18, we use `createRoot` / Import from react-dom/client !
import { App } from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);


