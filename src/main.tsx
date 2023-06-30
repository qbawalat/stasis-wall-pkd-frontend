import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import './index.css';
import './fonts/SpaceGrotesk-Bold.ttf';
import './fonts/SpaceGrotesk-Light.ttf';
import './fonts/SpaceGrotesk-Medium.ttf';
import './fonts/SpaceGrotesk-Regular.ttf';
import './fonts/SpaceGrotesk-SemiBold.ttf';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
