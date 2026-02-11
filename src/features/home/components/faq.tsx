import type { CollapseProps } from 'antd';

import { Collapse, Typography } from 'antd';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import { FaqItems } from '../../../shared/data/faq_items.ts';

const { Title } = Typography;

const collapseItems: CollapseProps['items'] = FaqItems.map(
  ({ key, question, answer }) => ({
    key,
    label: question,
    children: answer,
  }),
);

export const Faq: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<React.Key | React.Key[]>(
    '1',
  );

  return (
    <section dir="rtl" className="faq-section">
      <div className="container">
        <div className="faq-wrapper">
          <Title
            level={2}
            className="faq-title mb-10! text-center! text-3xl! font-black! sm:text-4xl!"
          >
            سوالات پرتکرار
          </Title>

          <Collapse
            className="faq-collapse"
            bordered={false}
            expandIconPlacement="end"
            activeKey={activeKey as unknown as number | string}
            onChange={(key) => setActiveKey(key)}
            expandIcon={({ isActive }) =>
              isActive ? (
                <IoClose style={{ fontSize: 14 }} />
              ) : (
                <FaPlus style={{ fontSize: 14 }} />
              )
            }
            items={collapseItems}
          />
        </div>
      </div>
    </section>
  );
};
