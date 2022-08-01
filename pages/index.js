import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sapien mi. Vivamus egestas aliquam nibh et sodales. Praesent sed ligula erat. Curabitur a vehicula nisl. Integer non euismod lacus, vel bibendum dui. Mauris fringilla justo non lobortis venenatis. In vitae ex a odio tristique placerat eget sit amet sem. Sed eget sodales nisl. Aenean bibendum enim quam. Nullam auctor ut nunc ac blandit.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
