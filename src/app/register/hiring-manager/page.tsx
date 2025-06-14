'use client';

import { useState, useMemo } from 'react';
import {
  Input,
  Upload,
  Button,
  Form,
  message,
  Image,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { registerHiringManager, registerUser } from '@/firebase/auth';
import { storage } from '@/firebase/config';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

export type HiringManagerData = {
  email: string;
  password: string;
  name: string;
  userType: 'hiring_manager';
  description: string;
  country: string;
  state: string;
  address: string;
  profilePicture: File | null;
  cvFile: File | null;
  portfolioLink: string;
  usersHired: number | '';
};

export default function HiringManagerRegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState<HiringManagerData>({
    email: '',
    password: '',
    name: '',
    userType: 'hiring_manager',
    description: '',
    country: '',
    state: '',
    address: '',
    profilePicture: null,
    cvFile: null,
    portfolioLink: '',
    usersHired: '',
  });

  const isFormValid = useMemo(() => {
    const required = [
      form.email,
      form.password,
      form.name,
      form.description,
      form.country,
      form.state,
      form.address,
      form.portfolioLink,
    ];
    return required.every(Boolean) && form.profilePicture && form.cvFile !== null;
  }, [form]);

  const handleChange = <K extends keyof HiringManagerData>(key: K, value: HiringManagerData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (file: File, type: 'profile' | 'cv') => {
    if (type === 'profile') {
      setForm(prev => ({ ...prev, profilePicture: file }));
    } else {
      setForm(prev => ({ ...prev, cvFile: file }));
    }
  };

  const uploadFile = async (file: File, path: string): Promise<string> => {
    const storageRef = ref(storage, `${path}/${uuidv4()}`);
    const snap = await uploadBytes(storageRef, file);
    return await getDownloadURL(snap.ref);
  };

  const handleSubmit = async () => {
    try {
      const profilePictureUrl = form.profilePicture
        ? await uploadFile(form.profilePicture, 'profilePictures')
        : '';
      const cvUrl = form.cvFile ? await uploadFile(form.cvFile, 'cvs') : '';

      const payload = {
        email: form.email,
        password: form.password,
        name: form.name,
        userType: 'hiring_manager' as const,
        description: form.description,
        country: form.country,
        state: form.state,
        address: form.address,
        portfolioLink: form.portfolioLink,
        usersHired: Number(form.usersHired),
        profilePictureUrl,
        cvUrl,
      };

      await registerHiringManager(payload);

      message.success('Registration successful!');
      router.replace('/login');
    } catch (e) {
      console.error(e);
      message.error('Registration failed.');
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 max-h-[100vh] md:h-auto bg-gradient-to-br from-blue-600 to-indigo-700 text-white hidden lg:flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:brightness-110">
      <BriefcaseIcon className="h-16 w-16 mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold mb-2">I'm a Hiring Manager</h2>
        <p className="text-base md:text-lg max-w-xs text-center px-4">
          Discover top talents, manage hiring, and build your dream team easily.
        </p>
      </div>
      <div className="p-4 flex-1">
        <h1 className="text-gray-800 font-semibold text-[22px]">
          Register as a <strong className="text-blue-500">Hiring Manager</strong>
        </h1>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Email" required>
            <Input onChange={e => handleChange('email', e.target.value)} />
          </Form.Item>
          <Form.Item label="Full Name" required>
            <Input onChange={e => handleChange('name', e.target.value)} />
          </Form.Item>
          <Form.Item label="About You">
            <Input.TextArea rows={3} onChange={e => handleChange('description', e.target.value)} />
          </Form.Item>
          <Form.Item label="Country">
            <Input onChange={e => handleChange('country', e.target.value)} />
          </Form.Item>
          <Form.Item label="State">
            <Input onChange={e => handleChange('state', e.target.value)} />
          </Form.Item>
          <Form.Item label="Residential Address">
            <Input onChange={e => handleChange('address', e.target.value)} />
          </Form.Item>
          <Form.Item label="Portfolio Link">
            <Input onChange={e => handleChange('portfolioLink', e.target.value)} />
          </Form.Item>
          <Form.Item label="Number of Users Hired">
            <Input
              type="number"
              onChange={e => handleChange('usersHired', e.target.value ? parseInt(e.target.value) : '')}
            />
          </Form.Item>
          <Form.Item label="Profile Picture">
            <Upload beforeUpload={file => { handleFileChange(file, 'profile'); return false; }} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Upload CV (PDF)">
            <Upload
              beforeUpload={file => { handleFileChange(file, 'cv'); return false; }}
              showUploadList={false}
              accept=".pdf"
            >
              <Button icon={<UploadOutlined />}>Upload CV</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
          <Form.Item label="Password" required>
            <Input.Password onChange={e => handleChange('password', e.target.value)} />
          </Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" disabled={!isFormValid}>
              Register
            </Button>
          </Form.Item>
        </Form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <strong
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => router.replace('/login')}
          >
            Login here
          </strong>
        </p>
      </div>
    </div>
  );
}
