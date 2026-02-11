import { Col, Row, Typography } from 'antd';
import React from 'react';

import SimplifyImage from '../../../assets/images/simplify_life.webp';

const { Title, Paragraph, Text } = Typography;

export const SimplifyLife: React.FC = () => {
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
            className="text-center md:text-right"
          >
            <div className="hero-content flex w-full flex-col items-center md:items-start">
              <Text className="hero-text hero-label inline-flex items-center rounded-full bg-blue-50 px-5 py-1.5 text-xs font-medium tracking-wide text-blue-600 md:text-sm">
                مکان هم مهمه
              </Text>

              <Title
                level={2}
                className="hero-text hero-title mt-2! text-3xl! leading-tight! font-black! sm:text-4xl! lg:text-5xl!"
              >
                زندگی‌ات را ساده‌تر کن
              </Title>

              <Paragraph className="hero-text hero-description mt-4! text-sm! leading-8! text-gray-600 sm:text-base!">
                یادآورها فقط وابسته به زمان نیستن. مکان دلخواهت رو مشخص کن، و
                وقتی بهش برسی همون لحظه کارهای مرتبط ظاهر می‌شن. خانه، محل کار
                یا هر جای دیگه — بدون فراموشی، بدون استرس.
              </Paragraph>
            </div>
          </Col>

          <Col
            xs={{ span: 24, order: 2 }}
            md={{ span: 12, order: 2 }}
            className="mb-4 md:mb-0"
          >
            <div className="relative flex w-full justify-center">
              <img
                src={SimplifyImage}
                alt="نمونه‌ای از لیست موقعیت‌های مختلف برای یادآوری"
                className="w-full max-w-xs rounded-3xl shadow-2xl sm:max-w-sm md:max-w-md"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
