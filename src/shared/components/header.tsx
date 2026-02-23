import { Button } from 'antd';
import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';

import { useMe } from '../../features/me/hooks/use_me';
import { HeaderItems } from '../data/header_items.ts';
import { HeaderDrawer } from './header_drawer.tsx';
import { HeaderItem } from './header_item.tsx';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const { me, loading } = useMe();
  const isAuthenticated = !!me;

  const onDrawerClose = (
    _: KeyboardEvent | React.KeyboardEvent | React.MouseEvent,
  ) => setIsDrawerOpen(false);

  const renderAuthSection = () => {
    if (loading) return null;

    if (isAuthenticated) {
      const displayName = me?.name?.trim() || 'حساب من';
      return (
        <Link
          to="/dashboard/me"
          className="header-user-link"
        >
          <IoPersonCircleOutline className="header-user-icon" />
          <span className="header-user-name">{displayName}</span>
        </Link>
      );
    }

    return (
      <>
        <Link
          to="/login"
          className="rounded-xl bg-blue-600! px-4 py-1 text-sm font-medium text-white! lg:hidden"
        >
          ورود
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/signup"
            className="rounded-full border border-blue-600 px-6 py-2 text-sm font-medium text-blue-600 transition-all duration-100 hover:bg-blue-600! hover:text-white!"
          >
            ثبت‌نام
          </Link>
          <Link
            to="/login"
            className="rounded-full bg-blue-600! px-6 py-2 text-sm font-medium text-white!"
          >
            ورود
          </Link>
        </div>
      </>
    );
  };

  return (
    <header className="flex h-18 items-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="! text-4xl font-semibold">
            <Link className="text-black!" to="/">
              تاپیرا
            </Link>
          </h1>

          <ul className="hidden items-center gap-10 lg:flex">
            {HeaderItems.map((item) => (
              <HeaderItem key={`header-item-${item.title}`} {...item} />
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden!"
            type="text"
          >
            <IoMenu size="28" />
          </Button>
          <HeaderDrawer
            onClose={onDrawerClose}
            open={isDrawerOpen}
            userDisplayName={me?.name?.trim() ?? (isAuthenticated ? '' : undefined)}
          />
          {renderAuthSection()}
        </div>
      </div>
    </header>
  );
};
