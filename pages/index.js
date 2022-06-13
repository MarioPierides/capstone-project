import Head from 'next/head';
import styledComponents from 'styled-components';

import Title from '../components/Header';
import Stage from '../components/Stage';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Title>Puppy Date</Title>
      <Stage />
      <Intro />
    </>
  );
}
