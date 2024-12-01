'use server';

import { redirect } from 'next/navigation';
import { saveFaq } from './faq';

function isInvalidText(text: string) {
  return !text || text.trim() === '';
}

export async function sendFaq(prevState: any, formData: any) {
  console.log(formData);

  const faq = {
    name: formData.get('name'),
    email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    image: formData.get('image'),
  };

  if (
    isInvalidText(faq.name) ||
    isInvalidText(faq.email) ||
    isInvalidText(faq.title) ||
    isInvalidText(faq.summary) ||
    !faq.email.includes('@') ||
    !faq.image ||
    faq.image.size === 0
  ) {
    return {
      message: 'Invalid input',
    };
  }
  await saveFaq(faq);
  redirect('/community');
}
