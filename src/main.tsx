import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RecoilRoot } from 'recoil';
import IsMobileContext from './contexts/is-mobile-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Theme>
            <RecoilRoot>
                <IsMobileContext>
                    <App />
                </IsMobileContext>
            </RecoilRoot>
        </Theme>
    </React.StrictMode>,
)
