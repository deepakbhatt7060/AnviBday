import React from 'react';
import Provider from './Provider.js';
import { createRoot } from 'react-dom/client';
import HappyBirthdayPrincess from './HappyBirthdayPrincess.jsx';
createRoot(document.getElementById('root')).render(
<Provider><HappyBirthdayPrincess /></Provider>);
