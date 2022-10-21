import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Login from './auth/login'

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Recipe App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Login />
    </div>
  )
}
