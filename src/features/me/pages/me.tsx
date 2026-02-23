import { Button, Form, Input, Skeleton } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import { meApi } from '../api';
import type { Me, UpdateMeInput } from '../types';

interface MeFormValues {
  name: string;
  phone: string;
  password?: string;
}

export const MePage: React.FC = () => {
  const [form] = Form.useForm<MeFormValues>();
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fetchMe = useCallback(async () => {
    try {
      const data = await meApi.get();
      setMe(data);
      form.setFieldsValue({
        name: data.name ?? '',
        phone: data.phone ?? '',
      });
    } catch {
      setMe(null);
    } finally {
      setLoading(false);
    }
  }, [form]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const handleFinish = async (values: MeFormValues) => {
    setSubmitting(true);
    try {
      const input: UpdateMeInput = {};
      if (values.name !== (me?.name ?? '')) input.name = values.name || undefined;
      if (values.phone !== (me?.phone ?? '')) input.phone = values.phone || undefined;
      if (values.password?.trim()) input.password = values.password;

      if (Object.keys(input).length === 0) return;

      const updated = await meApi.update(input);
      setMe(updated);
      form.setFieldsValue({ password: undefined });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div dir="rtl" className="me-page">
        <div className="me-skeleton">
          <Skeleton active paragraph={{ rows: 6 }} />
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="me-page">
      <header className="me-header">
        <h1 className="me-title">پروفایل</h1>
        <p className="me-subtitle">اطلاعات حسابت</p>
      </header>

      <section className="me-section">
        <div className="me-row me-row-readonly">
          <span className="me-row-label">ایمیل</span>
          <span className="me-row-value">{me?.email ?? '—'}</span>
        </div>
      </section>

      <Form form={form} onFinish={handleFinish} className="me-form">
        <section className="me-section">
          <div className="me-row">
            <label className="me-row-label" htmlFor="me-name">
              نام
            </label>
            <Form.Item name="name" noStyle rules={[]}>
              <Input
                id="me-name"
                variant="borderless"
                placeholder="نامت را وارد کن"
                className="me-input"
              />
            </Form.Item>
          </div>
          <div className="me-row">
            <label className="me-row-label" htmlFor="me-phone">
              شماره موبایل
            </label>
            <Form.Item name="phone" noStyle rules={[]}>
              <Input
                id="me-phone"
                variant="borderless"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="me-input"
              />
            </Form.Item>
          </div>
        </section>

        <section className="me-section me-section-password">
          <Form.Item
            name="password"
            label="رمز عبور جدید"
            rules={[
              { min: 8, message: 'حداقل ۸ کاراکتر' },
              { max: 72, message: 'حداکثر ۷۲ کاراکتر' },
            ]}
            className="me-password-item"
          >
            <Input.Password
              variant="borderless"
              placeholder="خالی بگذار اگر نمی‌خواهی تغییر کند"
              className="me-input"
            />
          </Form.Item>
        </section>

        <div className="me-actions">
          <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            size="large"
            className="me-save-btn"
          >
            ذخیره
          </Button>
        </div>
      </Form>
    </div>
  );
};
