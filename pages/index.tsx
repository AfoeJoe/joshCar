import Header from 'next/head';
import Layout from '../components/layout';
import React from 'react';
export default function Home() {
  return (
    <>
      <Header>
        <title>HOME</title>
      </Header>
      <Layout activeKey="home">
        <h1> HOME </h1>
      </Layout>
    </>
  );
}
