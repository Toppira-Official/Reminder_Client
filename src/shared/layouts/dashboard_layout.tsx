import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { IoChevronForward } from 'react-icons/io5';

const NAV_ITEMS = [{ path: '/dashboard/me', label: 'پروفایل' }];

export const DashboardLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <Link to="/" className="dashboard-back">
          <IoChevronForward className="dashboard-back-icon" />
          <span>بازگشت</span>
        </Link>
        <Link to="/dashboard" className="dashboard-brand">
          تاپیرا
        </Link>
      </header>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <nav className="dashboard-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`dashboard-nav-link ${pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
