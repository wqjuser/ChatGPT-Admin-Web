/* eslint-disable @next/next/no-page-custom-font */
import { SWRProvider } from '@/app/provider';
import '@/styles/globals.scss';
import '@/styles/markdown.scss';
import '@/styles/prism.scss';

export const metadata = {
  title: process.env.NEXT_PUBLIC_TITLE || 'ChatGPT Admin Web',
  description: 'Your personal ChatGPT Bot.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, userRef-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="manifest" href="/public/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <SWRProvider>{children}</SWRProvider>
      </body>
    </html>
  );
}
