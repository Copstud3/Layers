"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams?.get('email');
    if (emailParam) {
      setFormData(prev => ({ ...prev, email: emailParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />
      <div className="h-[calc(100vh-92px)] md:h-[calc(100vh-98px)] xl:h-[calc(100vh-130px)] flex flex-col justify-center max-w-lg mx-auto gap-6 px-4">
        <h2 className="text-2xl md:text-4xl font-medium text-center">
          Kick off here! These designs won&apos;t make{' '}
          <span className="text-lime-400">themselves.</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="input w-full"
            required
          />
          
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="input w-full"
            required
          />
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input w-full"
            required
          />
          
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input w-full"
            required
          />
          
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="input w-full"
            required
          />
          
          <Button 
            type="submit"
            variant="primary" 
            className="rounded-lg w-full"
          >
            Sign up
          </Button>
          
          <p className="text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-lime-400 hover:text-lime-300 transition-colors">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}