import { Col, Row, Typography } from 'antd';
import React from 'react';

import { FooterSections } from '../data/footer_items.ts';

const { Title, Text, Link } = Typography;

export const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className="site-footer">
      <div className="container">
        <Row
          gutter={[
            { xs: 16, md: 32 },
            { xs: 24, md: 32 },
          ]}
        >
          {FooterSections.map((section) => (
            <Col key={section.key} xs={24} md={6}>
              <div className="footer-column">
                <Title level={5} className="footer-heading">
                  {section.title}
                </Title>
                {section.links.map((link) =>
                  link.href ? (
                    <Link key={link.label} className="footer-link">
                      {link.label}
                    </Link>
                  ) : (
                    <Text key={link.label} className="footer-link">
                      {link.label}
                    </Text>
                  ),
                )}
              </div>
            </Col>
          ))}
        </Row>

        <div className="footer-bottom border-t border-gray-200" dir="ltr">
          <Text className="footer-copy font-operator-mono! text-sm! font-bold!">
            <span className="text-lg">©</span> 2026 Developed By Toppira Team
            With ❤️
          </Text>
        </div>
      </div>
    </footer>
  );
};

