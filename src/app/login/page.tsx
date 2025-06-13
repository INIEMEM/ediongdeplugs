'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input, Button, Form, message, Image } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, values.email, values.password);
      message.success('Login successful');
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
      message.error('Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left image side */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 justify-center items-center relative">
        <Image
          src="/images/r.jpg"
          alt="Welcome"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 text-white text-center px-6"
        >
          {/* <lord-icon
            src="https://cdn.lordicon.com/hrjifpbq.json"
            trigger="loop"
            delay="500"
            style={{ width: 100, height: 100 }}
          /> */}
          <h1 className="text-4xl font-bold mb-4">Welcome to DePlug</h1>
          <p className="text-lg text-blue-100">
            Your gateway to top talents and top opportunities.
          </p>
        </motion.div>
      </div>

      {/* Right login form side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Login to DePlug</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Welcome back! Log in to connect, collaborate, and unlock your personalized DePlug experience.
          </p>

          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Enter your email" size="large" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Enter your password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full"
                size="large"
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center text-sm text-gray-700">
            Don’t have an account?{' '}
            <span
              onClick={() => router.replace('/register')}
              className="text-blue-600 font-medium cursor-pointer"
            >
              Register here
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
