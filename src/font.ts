import localFont from 'next/font/local';

export const geist = localFont({
  src: [
    {
      path: './app/fonts/GeistVF.woff2', // convert to .woff2 if needed
      weight: 'variable',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const geistMono = localFont({
  src: [
    {
      path: './app/fonts/GeistMonoVF.woff2', // convert to .woff2
      weight: 'variable',
      style: 'normal',
    },
  ],
  display: 'swap',
});
