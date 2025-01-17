// ref: https://nextjs.org/docs/app/api-reference/components/font#variable

import { Oswald, Poppins } from 'next/font/google';
// import localFont from 'next/font/local';

// define your variable fonts
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
// define 2 weights of a non-variable font
const poppins400 = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins-400',
});
const poppins700 = Poppins({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-poppins-700',
});

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' });

export { oswald, poppins400, poppins700 };
