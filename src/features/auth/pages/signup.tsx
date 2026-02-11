import { Button, Divider, Form, Input, Typography } from 'antd';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const { Title, Paragraph } = Typography;

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpPage: React.FC = () => {
  const [form] = Form.useForm<SignUpFormValues>();

  const handleFinish = (values: SignUpFormValues) => {
    console.log('sign up form submitted', values);
  };

  const handleGoogleSignUp = () => {
    console.log('google sign up');
  };

  return (
    <section dir="rtl" className="auth-section">
      <div className="container">
        <div className="auth-card">
          <Title
            level={2}
            className="mb-2! text-center! text-2xl! font-black! sm:text-3xl!"
          >
            ساخت حساب کاربری
          </Title>

          <Paragraph className="mb-6! text-center! text-sm! text-gray-500 sm:text-base!">
            فقط چند ثانیه تا شروع کار با یادآورهای هوشمند تاپیرا فاصله داری.
          </Paragraph>

          <Button
            type="default"
            size="large"
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-full! border-gray-300! px-4! py-2.5!"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle size={20} />
            <span>ثبت‌نام با حساب گوگل</span>
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
              <Input.Password placeholder="حداقل ۸ کاراکتر" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="تکرار رمز عبور"
              dependencies={['password']}
              rules={[
                { required: true, message: 'تکرار رمز عبور را وارد کن.' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error('رمز عبور و تکرار آن یکسان نیست.'),
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="دوباره رمز عبور را وارد کن" />
            </Form.Item>

            <Form.Item className="mt-6! mb-0">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="rounded-full! py-2.5!"
              >
                ثبت‌نام
              </Button>
            </Form.Item>
          </Form>

          <div className="mt-4 text-center text-sm text-gray-600">
            قبلاً ثبت‌نام کرده‌ای؟{' '}
            <Link to="/login" className="text-blue-600">
              وارد حساب‌ات شو
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
