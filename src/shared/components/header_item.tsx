import type { MenuProps } from 'antd';

import { Dropdown, Space } from 'antd';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router';

import type { HeaderItem as IHeaderItem } from '../types/header_item';

export const HeaderItem: React.FC<IHeaderItem> = ({ title, link, items }) => {
  if (link)
    return (
      <Link className="cursor-pointer" to={link}>
        {title}
      </Link>
    );

  if (!items) return null;

  const menuProps: MenuProps['items'] = items.map((item) => ({
    key: item.title,
    title: item.title,
    label: <HeaderItem {...item} />,
  }));

  return (
    <Dropdown menu={{ items: menuProps }}>
      <button type="button">
        <Space>
          <span className="cursor-pointer">{title}</span>
          <FaAngleDown />
        </Space>
      </button>
    </Dropdown>
  );
};
