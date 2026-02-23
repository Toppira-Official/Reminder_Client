import type { CollapseProps } from 'antd';

import { Collapse, Drawer } from 'antd';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router';

import Logo from '../../assets/logo.jpeg';
import { HeaderItems } from '../data/header_items';

interface Props {
  open: boolean;
  onClose?: (e: KeyboardEvent | React.KeyboardEvent | React.MouseEvent) => void;
  userDisplayName?: string | null;
}

export const HeaderDrawer: React.FC<Props> = ({
  open,
  onClose,
  userDisplayName,
}) => {
  const items: CollapseProps['items'] = HeaderItems.map((item, index) => {
    if (!item.items) {
      return {
        key: `link-${index}`,
        label: (
          <Link
            to={item.link ?? '#'}
            onClick={onClose}
            className="px-1 text-base font-medium text-gray-800"
          >
            {item.title}
          </Link>
        ),
        children: null,
        showArrow: false,
      };
    }

    return {
      key: `collapse-${index}`,
      label: (
        <span className="px-1 text-base font-medium text-gray-800">
          {item.title}
        </span>
      ),
      children: (
        <div className="flex flex-col gap-1">
          {item.items.map((sub) => (
            <Link
              key={sub.title}
              to={sub.link ?? '#'}
              onClick={onClose}
              className="relative rounded-lg px-4 py-2 pr-4 text-sm text-gray-600 before:absolute before:inset-y-0 before:top-2 before:right-0 before:my-auto before:size-1.5 before:rounded-full before:bg-gray-700 hover:bg-gray-200"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      ),
    };
  });

  return (
    <Drawer
      placement="left"
      open={open}
      onClose={onClose}
      closable={{ placement: 'end' }}
      title={
        <Link to="/" onClick={onClose}>
          <img className="size-12 rounded-xl" src={Logo} alt="logo" />
        </Link>
      }
      className="p-0!"
    >
      {userDisplayName != null && (
        <Link
          to="/dashboard/me"
          onClick={onClose}
          className="header-drawer-user"
        >
          <IoPersonCircleOutline className="header-drawer-user-icon" />
          <span>{userDisplayName || 'حساب من'}</span>
        </Link>
      )}
      <Collapse
        ghost
        expandIconPlacement="end"
        items={items}
        expandIcon={({ isActive }) => (
          <FaAngleDown
            className={`transition-transform duration-300 ${
              isActive ? '' : 'rotate-180'
            }`}
          />
        )}
        className="[&_.ant-collapse-content-box]:px-0 [&_.ant-collapse-header]:rounded-xl [&_.ant-collapse-header]:px-4 [&_.ant-collapse-header]:py-3 [&_.ant-collapse-header]:hover:bg-gray-100"
      />
    </Drawer>
  );
};
