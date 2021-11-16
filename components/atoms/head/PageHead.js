import Head from 'next/head';

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword='frolancer freelancer professionals' />
    </Head>
  );
};

export default PageHead;
