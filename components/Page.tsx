import Head from 'next/head';

interface HeadProps {
  title: string;
  metaName: string;
  metaContent: string;
}
export default function Page({
  title,
  metaName,
  metaContent,
}: HeadProps) {
  return (
    <Head>
      <title>{title} | Ifeanyi Lucky</title>
      <meta name={metaName} content={metaContent} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
