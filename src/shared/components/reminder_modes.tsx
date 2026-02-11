import { Col, Row, Segmented, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

type ReminderMode = 'location' | 'one-time' | 'repeat';

const reminderContent: Record<
  ReminderMode,
  {
    title: string;
    description: string;
  }
> = {
  'one-time': {
    title: 'با یادآورهای هوشمند، کارهای بیشتری انجام بده',
    description:
      'برای کارهای مهمت تنها با چند لمس ساده، یک یادآور تنظیم کن تا در زمان دقیق بهت اطلاع بده. از جلسه‌های کاری تا کارهای شخصی، همه را یک‌جا مدیریت کن.',
  },
  repeat: {
    title: 'یادآورهای تکرارشونده برای کارهای روتین',
    description:
      'برای کارهایی مثل پرداخت قبض، ورزش، یا پیگیری پروژه‌ها، یادآورهای روزانه، هفتگی یا ماهانه تنظیم کن تا هیچ‌وقت از برنامه عقب نیفتی.',
  },
  location: {
    title: 'یادآور بر اساس موقعیت مکانی',
    description:
      'وقتی به محل کار، خانه یا هر موقعیت دلخواهت می‌رسی، تاپیرا به‌صورت خودکار یادآورهای مرتبط را بهت نشان می‌دهد تا درست در همان لحظه کارها را انجام بدهی.',
  },
};

export const ReminderModes: React.FC = () => {
  const [mode, setMode] = React.useState<ReminderMode>('one-time');

  const current = reminderContent[mode];

  return (
    <section dir="rtl" className="reminder-section">
      <div className="container">
        <Row justify="center">
          <Col xs={24} md={20} lg={14}>
            <div className="reminder-content">
              <div className="mb-6 flex w-full justify-center">
                <Segmented
                  className="reminder-segmented"
                  size="large"
                  value={mode}
                  onChange={(value) => setMode(value as ReminderMode)}
                  options={[
                    { label: 'یک‌بار', value: 'one-time' },
                    { label: 'تکرار', value: 'repeat' },
                    { label: 'بر اساس مکان', value: 'location' },
                  ]}
                />
              </div>

              <Title
                level={2}
                className="reminder-title mb-3! text-center! text-3xl! leading-snug! sm:text-4xl!"
              >
                {current.title}
              </Title>

              <Paragraph className="reminder-description mb-0! text-center! text-sm! leading-8! text-gray-600 sm:text-base!">
                {current.description}
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
