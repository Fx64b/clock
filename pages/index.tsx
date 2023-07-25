import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {

  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00', milliseconds: '00'});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 10); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTime() {
    const date = new Date(Date.now());
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0').slice(0, 2);
    return { hours, minutes, seconds, milliseconds };
  }

  const { hours, minutes, seconds, milliseconds } = time;

  return (
    <>
      <Head>
        <title>Clock</title>
        <meta name="description" content="Clock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen flex flex-col justify-center items-center text-white cursor-default select-none'>
        <div className='flex flex-col text-9xl md:text-9xl md:flex-row md:gap-3'>
          <span>{hours}</span>
          <span className='hidden md:flex'>:</span>
          <span>{minutes}</span>
          <span className='hidden md:flex'>:</span>
          <span>{seconds}</span>
          <span className='hidden md:flex'>:</span>
          <span>{milliseconds}</span>
        </div>
      </main>
    </>
  )
}
