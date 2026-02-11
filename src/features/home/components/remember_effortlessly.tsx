import { Col, Row, Typography } from 'antd';
import React from 'react';

import RememberImage from '../../../assets/images/remember_effortlessly.webp';

const { Title, Paragraph, Text } = Typography;

export const RememberEffortlessly: React.FC = () => {
  return (
    <section dir="rtl" className="hero-section">
      <div className="container">
        <Row
          gutter={[
            { xs: 16, md: 32 },
            { xs: 16, md: 48 },
          ]}
          align="middle"
          justify="space-between"
        >
          <Col
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}
            className="mb-4 md:mb-0"
          >
            <div className="relative flex w-full justify-center">
              <img
                src={RememberImage}
                alt="نمونه‌ای از تنظیم یادآورهای تکرارشونده"
                className="w-full max-w-xs rounded-3xl shadow-2xl sm:max-w-sm md:max-w-md"
              />
            </div>
          </Col>

          <Col
            xs={{ span: 24, order: 2 }}
            md={{ span: 12, order: 2 }}
            className="text-center md:text-right"
          >
            <div className="hero-content flex w-full flex-col items-center md:items-start">
              <Text className="hero-text hero-label inline-flex items-center rounded-full bg-blue-50 px-5 py-1.5 text-xs font-medium tracking-wide text-blue-600 md:text-sm">
                تکرارشونده و هوشمند
              </Text>

              <Title
                level={2}
                className="hero-text hero-title mt-2! text-3xl! leading-tight! font-black! sm:text-4xl! lg:text-5xl!"
              >
                بدون زحمت یادت می‌ماند
              </Title>

              <Paragraph className="hero-text hero-description mt-4! text-sm! leading-8! text-gray-600 sm:text-base!">
                برای جلسه‌های هفتگی، قرارهای پزشکی یا کارهای دوره‌ای، یادآورهای
                تکرارشونده تنظیم کن تا در روز و ساعتی که می‌خواهی، به‌صورت
                خودکار بهت یادآوری شود و ذهنت از دغدغه‌ی کارهای روتین خالی
                بماند.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
