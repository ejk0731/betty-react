'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function FaqFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submiitting...' : 'Submit FAQ'}
    </button>
  );
}
