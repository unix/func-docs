import Head from 'next/head'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { useEffect, useMemo, useState } from 'react'
import { CssBaseline, ZeitProvider } from '@zeit-ui/react'
import { PrismBaseline } from '@zeit-ui/react-prism'
import useDomClean from 'lib/use-dom-clean'
import { ConfigsContext } from 'lib/config'

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light')
  const initialValue = useMemo(
    () => ({
      onThemeChange: () =>
        setTheme(last => {
          const next = last === 'dark' ? 'light' : 'dark'
          if (typeof window !== 'undefined') {
            console.log(next)
            window.localStorage.setItem('theme', next)
          }
          return next
        }),
    }),
    [],
  )

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme !== 'dark') return
    setTheme('dark')
  }, [])
  useDomClean()

  return (
    <>
      <Head>
        <title>Func</title>
        <meta name="google" content="notranslate" />
        <meta name="twitter:creator" content="@echo_witt" />
        <meta name="referrer" content="strict-origin" />
        <meta property="og:title" content="func" />
        <meta property="og:url" content="https://func.unix.bio" />
        <link rel="dns-prefetch" href="//func.unix.bio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="generator" content="func" />
        <meta name="description" content="Modern Command Line Framework." />
        <meta property="og:description" content="Modern Command Line Framework." />
        <meta
          itemProp="image"
          property="og:image"
          content="https://func.unix.bio/assets/func.png"
        />
        <meta property="og:image" content="https://func.unix.bio/assets/func.png" />
        <meta property="twitter:image" content="https://func.unix.bio/assets/func.png" />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <ZeitProvider theme={{ type: theme }}>
        <CssBaseline />
        <PrismBaseline />
        <ConfigsContext.Provider value={initialValue}>
          <Component {...pageProps} />
        </ConfigsContext.Provider>
        <style global jsx>{`
          #__next {
            overflow-x: unset;
          }
        `}</style>
      </ZeitProvider>
    </>
  )
}

export default Application
