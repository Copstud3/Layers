'use client';

import Button from "./Button";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Changed from 'next/router'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Using new router.push format for App Router
    router.push(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="flex justify-center items-center px-4">
      <form
        className="flex border border-white/15 rounded-full p-2 mt-8 justify-between w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-transparent px-4 flex-1 text-sm md:text-base placeholder-white/70 focus:outline-none text-white"
          required
        />
        <Button
          type="submit"
          variant="primary"
          className="ml-2 whitespace-nowrap px-4 py-2 text-sm md:text-base"
          size="sm"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}