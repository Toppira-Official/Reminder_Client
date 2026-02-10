export type HeaderItem =
  | {
      title: string;
      items: HeaderItem[];
      link?: never;
    }
  | {
      title: string;
      link: string;
      items?: never;
    };
