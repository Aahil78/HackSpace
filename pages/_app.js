import * as React from 'react'
import NextApp from 'next/app'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Navbar from '../components/navbar'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
