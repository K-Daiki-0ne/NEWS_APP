import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HomeCompoent } from '../src/components/HomeComponent';

export default function Home():JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEWS APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit">
            NEWS APP
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        <Container 
          fixed
          maxWidth='xs'
        >
          <HomeCompoent />
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
