import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"
import { NextComponentType } from "next"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps & { Component: NextComponentType }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
