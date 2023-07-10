import '@/styles/globals.css'
import React, {useEffect, useState} from 'react'
import {Layoutt} from '../components/indes';

export default function App({ Component, pageProps }) {
  return (
    <Layoutt>
      <Component {...pageProps} />
    </Layoutt>
  )
}
