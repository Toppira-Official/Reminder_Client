import { Carousel, Rate, Typography } from 'antd';
import React from 'react';

const { Paragraph, Text } = Typography;

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'رضا مهدوی',
    role: 'کارآفرین',
    text: 'به‌عنوان یک کاربر حرفه‌ای، یادآورهای مکانی و لیست کارهای تاپیرا باعث شده هیچ کار مهمی را از دست ندهم و همیشه برنامه‌ریزی‌ام منظم بماند.',
  },
  {
    name: 'سارا احمدی',
    role: 'مدیر پروژه',
    text: 'تاپیرا مدیریت کارهای تیمی و جلسات تکرارشونده را برای من خیلی ساده کرده. هماهنگی با اعضای تیم و زمان‌بندی کارها خیلی روان‌تر شده است.',
  },
  {
    name: 'مانی رستگار',
    role: 'برنامه‌ریز رویداد',
    text: 'برای برنامه‌ریزی رویدادها و پیگیری جزئیات، یادآورهای پیشرفته‌ی تاپیرا کمک می‌کند هیچ مرحله‌ای جا نیفتد و همه چیز طبق برنامه جلو برود.',
  },
  {
    name: 'الهام کاظمی',
    role: 'طراح محصول',
    text: 'امکان تنظیم انواع یادآور و تمرکز روی کارهای مهم، کمک کرده روی طراحی بهتر محصول تمرکز کنم و کمتر درگیر کارهای روتین شوم.',
  },
];

export const Testimonials: React.FC = () => {
  const slides: Testimonial[][] = [];

  for (let i = 0; i < testimonials.length; i += 3) {
    slides.push(testimonials.slice(i, i + 3));
  }

  return (
    <section dir="rtl" className="testimonials-section">
      <div className="container">
        <Carousel className="testimonials-carousel" dots arrows draggable>
          {slides.map((group, index) => (
            <div key={index}>
              <div className="testimonials-slide">
                {group.map((item) => (
                  <div className="testimonial-card-wrapper" key={item.name}>
                    <div className="testimonial-card">
                      <Rate disabled defaultValue={5} className="mb-4" />
                      <Paragraph className="testimonial-text">
                        {item.text}
                      </Paragraph>

                      <div className="testimonial-footer">
                        <Text className="testimonial-name">{item.name}</Text>
                        <Text className="testimonial-role">{item.role}</Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
