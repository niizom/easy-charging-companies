import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Preloader from './components/Preloader';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <React.Suspense fallback={<Preloader />}>
            <ErrorBoundary>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ErrorBoundary>
        </React.Suspense>
    </React.StrictMode>
);
