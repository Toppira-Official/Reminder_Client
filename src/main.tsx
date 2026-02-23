import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Dana',
            colorPrimary: '#007aff',
          },
        }}
        direction="rtl"
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>,
  );
}
