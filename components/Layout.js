import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
export default function Layout({children}) {
  return (
    <>
    <Meta/>
    <Nav />
    <div className = {styles.container}>
      <main className = {styles.main}>
        <Header/>
      {children}
      </main>
    </div>
    </>
  )
}
