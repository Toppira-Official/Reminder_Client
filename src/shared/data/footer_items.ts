import type { FooterSection } from '../types/footer_item';

export const FooterSections: FooterSection[] = [
  {
    key: 'toppira',
    title: 'تاپیرا',
    links: [
      { label: 'درباره تاپیرا', href: '/about/toppira' },
      { label: 'تماس با ما', href: '/contact' },
      { label: 'فرصت‌های شغلی', href: '/careers' },
    ],
  },
  {
    key: 'product',
    title: 'محصول',
    links: [
      { label: 'امکانات', href: '/features' },
      { label: 'قیمت‌گذاری', href: '/pricing' },
      { label: 'به‌روزرسانی‌ها', href: '/changelog' },
    ],
  },
  {
    key: 'resources',
    title: 'منابع',
    links: [
      { label: 'مرکز راهنما', href: '/help-center' },
      { label: 'سؤالات متداول', href: '/faq' },
      { label: 'وبلاگ', href: '/blog' },
    ],
  },
  {
    key: 'legal',
    title: 'قوانین',
    links: [
      { label: 'حریم خصوصی', href: '/legal/privacy' },
      { label: 'شرایط استفاده', href: '/legal/terms' },
    ],
  },
  {
    key: 'apps',
    title: 'دانلود اپلیکیشن',
    links: [
      { label: 'iOS (به‌زودی)', href: '/download/ios' },
      { label: 'Android (به‌زودی)', href: '/download/android' },
    ],
  },
];
