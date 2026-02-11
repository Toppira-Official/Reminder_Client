import { Collapse, Typography } from 'antd';
import type { CollapseProps } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const { Title } = Typography;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'چطور می‌توانم در تاپیرا یک یادآور بسازم؟',
    children:
      'فقط کافی است نوع یادآور را انتخاب کنی، عنوان و زمانش را مشخص کنی و روی ذخیره بزن. تاپیرا در زمان انتخاب‌شده بهت اطلاع می‌دهد.',
  },
  {
    key: '2',
    label: 'آیا می‌توانم یادآورهای تکرارشونده تنظیم کنم؟',
    children:
      'بله، می‌توانی برای کارهای روزانه، هفتگی، ماهانه یا حتی سفارشی، یادآور تکرارشونده تنظیم کنی تا به‌صورت خودکار تکرار شوند.',
  },
  {
    key: '3',
    label: 'یادآورهای مبتنی بر مکان چطور کار می‌کنند؟',
    children:
      'فقط کافی است یک مکان مثل خانه، محل کار یا فروشگاه را انتخاب کنی. زمانی که به آن نقطه نزدیک شوی، تاپیرا یادآور مرتبط را برایت فعال می‌کند.',
  },
  {
    key: '4',
    label: 'آیا تاپیرا روی همه دستگاه‌ها همگام می‌شود؟',
    children:
      'بله، حساب کاربری‌ات روی همه دستگاه‌هایی که وارد شده‌ای همگام است و یادآورهایت را از هر جایی می‌توانی ببینی و مدیریت کنی.',
  },
  {
    key: '5',
    label: 'آیا استفاده از تاپیرا رایگان است؟',
    children:
      'هسته اصلی تاپیرا رایگان است و می‌توانی به‌صورت نامحدود یادآور بسازی. برخی قابلیت‌های پیشرفته ممکن است در نسخه‌ی حرفه‌ای ارائه شوند.',
  },
];

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
            expandIconPosition="end"
            activeKey={activeKey}
            onChange={(key) => setActiveKey(key)}
            expandIcon={({ isActive }) =>
              isActive ? (
                <CloseOutlined style={{ fontSize: 14 }} />
              ) : (
                <PlusOutlined style={{ fontSize: 14 }} />
              )
            }
            items={items}
          />
        </div>
      </div>
    </section>
  );
};

