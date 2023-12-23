import React, { FC } from 'react'
import styles from './modalLayout.module.css'

interface Props {
  children: React.ReactNode
  setActive: (arg: boolean) => void
  active: boolean
}

export const ModaLayout:FC<Props> = ({ children, setActive, active }) => {
  return (
    <div className={styles.modalLayout} onClick={() => setActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}