import React from 'react';
import { Head } from 'next/document';
import brand from '../public/text/brand';

const HeadComponent = () => (
  <Head>
    <meta name="description" content={brand.architect.desc} />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
  </Head>
);

export default HeadComponent;
