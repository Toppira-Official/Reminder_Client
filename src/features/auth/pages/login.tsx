import { Button, Divider, Form, Input, Typography } from 'antd';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const { Title, Paragraph, Text } = Typography;

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const [form] = Form.useForm<LoginFormValues>();

  const handleFinish = (values: LoginFormValues) => {
    console.log('login form submitted', values);
  };

  const handleGoogleLogin = () => {
    console.log('google login');
  };

  return (
    <section dir="rtl" className="auth-section">
      <div className="container">
        <div className="auth-card">
          <Title
            level={2}
            className="mb-2! text-center! text-2xl! font-black! sm:text-3xl!"
          >
            ورود به تاپیرا
          </Title>

          <Paragraph className="mb-6! text-center! text-sm! text-gray-500 sm:text-base!">
            وارد حسابت شو و کارهات رو از هر جا مدیریت کن.
          </Paragraph>

          <Button
            type="default"
            size="large"
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-full! border-gray-300! px-4! py-2.5!"
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={20} />
            <span>ورود با حساب گوگل</span>
          </Button>

          <Divider plain>یا</Divider>

          <Form
            form={form}
            layout="vertical"
            size="large"
            onFinish={handleFinish}
            className="mt-2"
          >
            <Form.Item
              name="email"
              label="ایمیل"
              rules={[
                { required: true, message: 'ایمیل را وارد کن.' },
                { type: 'email', message: 'ایمیل معتبر نیست.' },
              ]}
            >
              <Input placeholder="example@email.com" />
            </Form.Item>

            <Form.Item
              name="password"
              label="رمز عبور"
              rules={[{ required: true, message: 'رمز عبور را وارد کن.' }]}
            >
              <Input.Password placeholder="رمز عبور" />
            </Form.Item>

            <Form.Item className="mb-2 flex items-center justify-between">
              <Text className="text-xs text-gray-500">
                رمز عبورت را فراموش کرده‌ای؟ به‌زودی امکان بازیابی اضافه می‌شود.
              </Text>
            </Form.Item>

            <Form.Item className="mt-4 mb-1">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="rounded-full! py-2.5!"
              >
                ورود
              </Button>
            </Form.Item>
          </Form>

          <div className="mt-4 text-center text-sm text-gray-600">
            حساب نداری؟{' '}
            <Link to="/signup" className="text-blue-600">
              همین حالا ثبت‌نام کن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
