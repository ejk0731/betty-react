'use server';

import { redirect } from 'next/navigation';
import { saveFaq } from './faq';

export async function sendFaq(formData: any) {
  console.log(formData);

  const faq = {
    name: formData.get('name'),
    email: formData.get('email'),
    title: formData.get('title'),
    summary: formData.get('summary'),
    image: formData.get('image'),
  };

  await saveFaq(faq);
  redirect('/community');
}
