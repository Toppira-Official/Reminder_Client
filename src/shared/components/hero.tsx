import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

import HeroImage from '../../assets/images/hero.webp';

const { Title, Paragraph, Text } = Typography;

export const Hero: React.FC = () => {
  return (
    <section dir="rtl" className="bg-white py-16">
      <div className="container">
        <Row
          gutter={[32, 48]}
          align="middle"
          justify="space-between"
          className="flex-col-reverse md:flex-row"
        >
          <Col xs={24} md={12} className="text-center md:text-right">
            <div className="flex flex-col items-center md:items-end">
              <Text className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
                یادآورهای هوشمند برای هر کاری
              </Text>

              <Title
                level={1}
                className="!mt-2 !text-3xl !leading-snug !font-black sm:!text-4xl md:!text-5xl"
              >
                هرگز کاری را فراموش نکن.
              </Title>

              <Paragraph className="!mt-4 !max-w-xl !text-sm !leading-8 text-gray-600 sm:!text-base">
                برای کارهای مهمت یادآور بگذار، اعلان‌های تکرارشونده تنظیم کن و
                مطمئن باش هیچ قرار روزانه، هفتگی یا ماهانه‌ای از قلم
                نمی‌افتد. تاپیرا کمک می‌کند همیشه یک قدم جلوتر باشی.
              </Paragraph>

              <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <Button
                  type="primary"
                  size="large"
                  className="!rounded-full !px-8 !py-4 !text-base"
                >
                  رایگان شروع کن
                </Button>

                <Button
                  type="default"
                  size="large"
                  className="!rounded-full !border-none !px-6 !py-4 !text-base !shadow-none"
                >
                  دیدن امکانات
                </Button>
              </div>
            </div>
          </Col>

          <Col
            xs={24}
            md={12}
            className="mb-4 flex justify-center md:mb-0 md:justify-start"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <img
                src={HeroImage}
                alt="نمایی از اپلیکیشن مدیریت کارهای تاپیرا"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
