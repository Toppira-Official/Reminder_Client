import type { HeaderItem } from '../types/header_item';

export const HeaderItems: HeaderItem[] = [
  {
    title: 'خانه',
    link: '/',
  },
  {
    title: 'معرفی',
    items: [
      {
        title: 'درباره تاپیرا',
        link: '/about/toppira',
      },
      {
        title: 'درباره ما',
        link: '/about/us',
      },
      {
        title: 'ماموریت و چشم‌انداز',
        link: '/about/vision',
      },
      {
        title: 'تیم ما',
        link: '/about/team',
      },
    ],
  },
  {
    title: 'خدمات',
    items: [
      {
        title: 'محصولات',
        link: '/services/products',
      },
      {
        title: 'راهکارها',
        link: '/services/solutions',
      },
      {
        title: 'تعرفه‌ها',
        link: '/services/pricing',
      },
    ],
  },
  {
    title: 'منابع',
    items: [
      {
        title: 'بلاگ',
        link: '/blog',
      },
      {
        title: 'سوالات متداول',
        link: '/faq',
      },
      {
        title: 'راهنما',
        link: '/guide',
      },
    ],
  },
  {
    title: 'تماس با ما',
    link: '/contact',
  },
];
