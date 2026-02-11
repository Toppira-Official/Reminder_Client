export interface FooterLinkItem {
  label: string;
  href?: string;
}

export interface FooterSection {
  key: string;
  title: string;
  links: FooterLinkItem[];
}
