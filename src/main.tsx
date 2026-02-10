import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Dana',
      },
    }}
    direction="rtl"
  >
    <App />
  </ConfigProvider>,
);
