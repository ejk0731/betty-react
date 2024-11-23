'use server';

import { redirect } from 'next/navigation';
import { saveFaq } from './items';

export async function sendFaq(formData: any) {
  console.log(formData);

  const faq = {
    title: formData.get('title'),
    summery: formData.get('summary'),
    image: formData.get('image'),
  };

  await saveFaq(faq);
  redirect('/community/faq');
}
