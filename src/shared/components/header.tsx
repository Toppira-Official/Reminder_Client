import { Link } from 'react-router';

import { HeaderItems } from '../data/header_items.ts';
import { HeaderItem } from './header_item.tsx';

export const Header = () => {
  return (
    <header className="flex h-18 items-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-10">
          <h1 className="text-4xl font-semibold">
            <Link to="/">تاپیرا</Link>
          </h1>

          {HeaderItems.map((item) => (
            <HeaderItem key={`header-item-${item.title}`} {...item} />
          ))}
        </div>

        <div>
          <Link
            to="/login"
            className="rounded-2xl border border-blue-600 bg-blue-600 px-12 py-2 text-white transition-all duration-100 hover:bg-transparent hover:text-blue-600"
          >
            ورود
          </Link>
        </div>
      </div>
    </header>
  );
};
