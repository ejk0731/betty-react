'use server';
export async function sendFaq(formData: any) {
  console.log(formData);

  const faq = {
    title: formData.get('title'),
    summery: formData.get('summary'),
    file: formData.get('file'),
  };
}
