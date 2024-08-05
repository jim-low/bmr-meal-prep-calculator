import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Theme>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </Theme>
    </React.StrictMode>,
)
