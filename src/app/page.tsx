'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className='container mx-auto px-4'>
        <h1>Home</h1>
        <p>This is a content to make our page longer</p>
        <div className='w-full h-screen bg-green-300'></div>
        <p>Lorem Ipsum is simply dummy text ...</p>
      </div>
    </>
  );
};

export default Home;
