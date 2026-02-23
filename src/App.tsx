import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router';

import { LoginPage } from './features/auth/pages/login.tsx';
import { SignUpPage } from './features/auth/pages/signup.tsx';
import { NotFoundPage } from './features/common/pages/not_found.tsx';
import { HomePage } from './features/home/pages/home.tsx';
import { MePage } from './features/me/pages/me.tsx';
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
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="/dashboard/me" replace />} />
        <Route path="me" element={<MePage />} />
      </Route>
    </Routes>
  );
}

export default App;
