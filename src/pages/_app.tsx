"use client";
import "../styles/globals.scss";
import "../styles/dcp.module.scss";
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import ReduxProvider from "@/config/redux-saga/redux-provider";
import { ThemeProvider } from "@/branding/theme/context";
// import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <AppCacheProvider key='css'>
          <Component {...pageProps} />
        </AppCacheProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
