import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Dana',
        },
      }}
      direction="rtl"
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>,
);
