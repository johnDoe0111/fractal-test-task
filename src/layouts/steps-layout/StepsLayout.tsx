import { FC } from 'react'
import styles from './stepsLayout.module.css'

interface Props {
  children: React.ReactNode
}

const StepsLayout: FC<Props> = ({ children }) => {
  return (
    <main className={styles.layout}>{children}</main>
  )
}

export default StepsLayout