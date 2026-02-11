import type { FooterSection } from '../types/footer_item';

export const FooterSections: FooterSection[] = [
  {
    key: 'toppira',
    title: 'تاپیرا',
    links: [
      { label: 'درباره تاپیرا', href: '/about/toppira' },
      { label: 'فرصت‌های شغلی', href: '/careers' },
      { label: 'تماس با ما', href: '/contact' },
    ],
  },
  {
    key: 'resources',
    title: 'منابع',
    links: [
      { label: 'مرکز راهنما', href: '/help-center' },
      { label: 'وبلاگ', href: '/blog' },
      { label: 'شرایط و حریم خصوصی', href: '/legal' },
    ],
  },
  {
    key: 'use-cases',
    title: 'راه‌های استفاده',
    links: [
      { label: 'مدیریت کارهای شخصی', href: '/use-cases/personal-tasks' },
      { label: 'پیگیری پروژه‌ها', href: '/use-cases/projects' },
      { label: 'یادآورهای تیمی', href: '/use-cases/team-reminders' },
    ],
  },
  {
    key: 'apps',
    title: 'دانلود اپلیکیشن',
    links: [{ label: 'به‌زودی روی iOS و Android' }],
  },
];

