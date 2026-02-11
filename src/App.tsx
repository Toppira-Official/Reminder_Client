import './styles/App.css';
import { Route, Routes } from 'react-router';

import { LoginPage } from './features/auth/pages/login.tsx';
import { SignUpPage } from './features/auth/pages/signup.tsx';
import { NotFoundPage } from './features/common/pages/not_found.tsx';
import { HomePage } from './features/home/pages/home.tsx';
import { DashboardLayout } from './shared/layouts/dashboard_layout.tsx';
import { PublicLayout } from './shared/layouts/public_layout.tsx';
import { RequireAuth } from './shared/routes/RequireAuth.tsx';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
