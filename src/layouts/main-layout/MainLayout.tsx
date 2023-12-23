import React, { FC } from "react"
import styles from './main-layout.module.css'

interface Props {
  children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className={styles.layout}>{children}</main>
  )
}

export default MainLayout
